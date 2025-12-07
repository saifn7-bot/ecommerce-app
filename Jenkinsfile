pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Explicitly use main branch and credentials if required
                git branch: 'main',
                    url: 'https://github.com/saifn7-bot/ecommerce-app.git',
                    credentialsId: 'Github'  // Only if your repo is private
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t saifn7/ecommerce-app:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push saifn7/ecommerce-app:latest'
                }
            }
        }

        stage('Deploy to Kubernetes') {
    steps {
        withEnv(["KUBECONFIG=/var/lib/jenkins/.kube/config"]) {
            sh 'kubectl apply -f k8s-deployment.yaml'
        }
    }
}
    }
}

