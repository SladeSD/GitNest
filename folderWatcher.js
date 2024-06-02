
const { Octokit } = require("@octokit/rest")
const chokidar = require('chokidar')
const simpleGit = require('simple-git')
const fs = require('fs')

const octokit = new Octokit({ auth: 'github_token' }) // replace the token

const projektiDir = "E:\\projekti"

function isValidName(name) {
  return /^[a-z0-9_-]+$/.test(name) && !/^[0-9_-]/.test(name)
}

const watcher = chokidar.watch(projektiDir, { ignored: /^\./, persistent: true, depth: 0, ignoreInitial: true })

watcher.on('addDir', async (path) => {
  const folderName = path.split('\\').pop()

  if (!isValidName(folderName)) {
    console.log(`Invalid folder name: ${folderName}, skipping...`)
    return;
  }

  try {
    const response = await octokit.repos.createForAuthenticatedUser({
      name: folderName,
      auto_init: true // readme
    });
    console.log(`GitHub repository created: ${response.data.html_url}`)

    const git = simpleGit(path)
    await git.init()
    await git.addRemote('origin', response.data.clone_url)
    
    console.log(`Git repository initialized and remote set for ${folderName}`)
  } 
  catch (error) {
    console.error('Failed to create repository or initialize Git:', error)
  }
});

console.log(`Watching for new folders in ${projektiDir}`)