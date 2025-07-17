#!/bin/bash

# Apply all Kubernetes configurations
kubectl apply -f namespace.yaml
kubectl apply -f postgres-configmap.yaml
kubectl apply -f postgres-secret.yaml
kubectl apply -f postgres-deployment.yaml
kubectl apply -f postgres-service.yaml

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
kubectl wait --for=condition=ready pod -l app=postgres -n nextjs-prisma --timeout=120s

# Apply application configurations
kubectl apply -f app-configmap.yaml
kubectl apply -f app-secret.yaml

# Build and push the Docker image (uncomment and modify as needed)
# docker build -t your-docker-username/nextjs-prisma-app:latest .
# docker push your-docker-username/nextjs-prisma-app:latest

# Deploy the application
kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml

# Optional: Apply ingress if you have a domain and ingress controller
# kubectl apply -f ingress.yaml

echo "Deployment complete. Use 'kubectl get all -n nextjs-prisma' to check the status."
