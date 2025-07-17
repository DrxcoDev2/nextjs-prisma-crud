pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/drxco/nextjs-prisma-crud.git'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci' 
      }
    }

    stage('Lint & Test') {
      steps {
        sh 'npm run lint'
        sh 'npm test' 
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Archive build') {
      steps {
        archiveArtifacts artifacts: '.next/**', fingerprint: true
      }
    }

    // Opcional: Deployment
    // stage('Deploy') {
    //   steps {
    //     sh './scripts/deploy.sh' // ejemplo si usas un script personalizado
    //   }
    // }
  }

  post {
    failure {
      echo '❌ Algo falló. Revisa los logs.'
    }
    success {
      echo '✅ Todo bien. Build exitoso.'
    }
  }
}
