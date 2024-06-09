<h1 align="center">GitNest</h1>
<p align="center">A simple program designed to automate the setup of new development projects by monitoring a specific directory and performing several actions whenever a new folder is created within this directory. This tool is particularly useful for developers who frequently start new projects and want to streamline their initial setup process.</p>

<h2>What does it do?</h2>

<h3>Directory Monitoring:</h3>
Automatically watches a designated directory for the addition of new folders.
        
<h3>GitHub Integration:</h3>
Creates a new GitHub repository for each new folder added to the monitored directory.
        
<h3>Git Initialization and Remote Setup:</h3>
Initializes a Git repository in the new folder and sets up a remote link to the newly created GitHub repository.

<h2>Configuration:</h2>
<h3>GitHub Token:</h3> 
You need to create a personal access token on GitHub with the repo scope. Follow the instructions on GitHub's documentation to generate one.

![firefox_XU9CHq9UWs](https://github.com/SladeSD/GitNest/assets/105843300/e20cf361-f08b-4e98-99a2-e9b7579cee85)

Replace *github_token* in the script with your actual GitHub token to authenticate API requests.

![Code_qU1Nk9GneD](https://github.com/SladeSD/GitNest/assets/105843300/321aa6cb-19a3-401f-b227-b99508753223)

<h3>Directory to Watch:</h3> 
Set the *projektiDir* variable in the script to the path of the directory you want to monitor.

![Code_sAsTOnCRp3](https://github.com/SladeSD/GitNest/assets/105843300/5d40e998-78d6-433e-b3dd-6201cf2a8cce)

<h3>Run the application</h3>

```bash
node folderWatcher.js
