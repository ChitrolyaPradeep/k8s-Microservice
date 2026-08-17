# k8s-Microservice
# 🚀 Kubernetes Microservice Deployment

A simple **Node.js microservice deployed on Kubernetes** using Docker, Kubernetes Deployment, Service, health probes, resource management, and multiple Pod replicas.

This project is designed as a practical demonstration of how to containerize a microservice and deploy it on a Kubernetes cluster.

---

## 📌 Project Overview

This project demonstrates the complete flow:

```text
Developer
    |
    v
Node.js Application
    |
    v
Docker Image
    |
    v
Docker Hub
    |
    v
Kubernetes Deployment
    |
    v
ReplicaSet
    |
    +----------------+----------------+
    |                |                |
    v                v                v
  Pod-1            Pod-2            Pod-3
    |                |                |
    +----------------+----------------+
                     |
                     v
               Kubernetes Service
                     |
                     v
                NodePort :30080
