# github-test-api
GitHub REST API with AngularJS front end 

## Requirements
* NodeJS (https://nodejs.org/en/download/)
* npm - only if not included with NodeJS installation - (https://www.npmjs.com/get-npm)
* http-server via npm "npm install --global http-server", as local server to deploy the app - (https://www.npmjs.com/get-npm)

## How to use
* From command line, go to root path of project.
* Install all dependencies needed to deploy the app with command "npm install".
* Once it's done, use de command "http-server" to start the local server on port 8080.
* Go to your web browser http://localhost:8080/#!/ . It's ready to use!.

## Authorization use
GitHub API requires using a Token to get access (limited - 15,000 request per hour aprox), so is needed to use a Personal Token (https://github.com/settings/tokens), for test purposes it can be stored on local file "/scripts/app.js" with the global var "myToken".

WARNING: This token can't be shared, is not provided and is only used for test purposes. In production environment must be stored safe, like environment variables.
If needed contact developer.
