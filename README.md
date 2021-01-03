# flappy-bird
This is a flappy bird clone made in javascript and p5

[Demo](https://ikittycode.github.io/flappy-bird/)

**Some images are from the coding train these images are not mine**
## How to develop on a Mac (or Linux)
1. Install [brew](https://brew.sh/)
2. Install NodeJS Version Manager(optional)
    ```
    brew install nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    nvm install v12.14.1
    nvm use --delete-prefix v12.14.1 --silent
    nvm alias default v12.14.1
    ```

3. Execute `make all` or `make help` to list all commands as below
    ```
    all                            setup start
    help                           List commands
    setup                          Install Node
    start                          Start the local web server
    ```
4. Open http://127.0.0.1:8080 in a browser. Use space bar to control the Flappy Bird
5. Publish a working demo to [Github Pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). GitHub > Select flappy-bird repository > Settings > GitHubPages > Select branch main > Select folder /root
