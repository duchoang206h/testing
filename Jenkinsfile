pipeline {
    agent {
        docker {
            image 'node:14' // Specify the Node.js version you need
            args '-p 3000:3000' // Optional: expose ports if required
        }
    }
    stages {
        stage('Initialize'){
             steps {
                def dockerHome = tool 'myDocker'
                env.PATH = "${dockerHome}/bin:${env.PATH}"   
            }   
        }
        stage('Checkout') {
            steps {
                // Checkout your source code from version control system (e.g., Git)
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                sh 'docker build -t duchoang206h/testing .'
            }
        }
        
        stage('Publish Docker Image') {
            steps {
                // Push the Docker image to a container registry
                withCredentials([dockerRegistry(credentialsId: 'docker_auth', url: ' https://index.docker.io/v1/')]) {
                    sh 'docker push duchoang206h/testing'
                }
            }
        }
    }
}
