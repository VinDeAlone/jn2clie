pipeline{
    agent any
    stages{
        stage("Git checkout project nad build app"){
            steps{
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/VinDeAlone/jn2clie']])
                powershell "npm install"
            }
        }
        stage("Build docker image"){
            steps{
                powershell "docker build -t vindealone/democlientjenkinsimage:0.0.1 ."
            }
        }
        stage("Upload to docker hub"){
            steps{
                withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerpwd')]) {
                    powershell "docker login -u vindealone -p ${dockerpwd}"
                }
                powershell "docker push vindealone/democlientjenkinsimage:0.0.1"
            }
        }
    }
}