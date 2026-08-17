# 🚀 Deploying a Node.js Microservice on Kubernetes

This project demonstrates how to containerize a Node.js microservice using Docker and deploy it on a Kubernetes cluster.

The complete workflow covered in this project is:

Developer → GitHub → Docker Build → Docker Hub → Kubernetes Deployment → Pods → Service → Application

---

## 📌 Project Objective

The objective of this project is to demonstrate a real-world Kubernetes microservice deployment.

The application is a simple Node.js/Express microservice that:

- Runs inside a Docker container
- Exposes port `3000`
- Provides a `/` application endpoint
- Provides a `/health` health-check endpoint
- Runs with 3 Kubernetes Pod replicas
- Uses Kubernetes readiness and liveness probes
- Uses CPU and memory requests/limits
- Is exposed outside the Kubernetes cluster using a NodePort Service
- Demonstrates Kubernetes self-healing and scaling

---

# 🏗️ Architecture

```text
                         Developer
                             |
                             |
                         GitHub Repo
                             |
                             v
                    +----------------+
                    | Docker Build   |
                    +-------+--------+
                            |
                            v
                    +----------------+
                    | Docker Image   |
                    | hello-service  |
                    +-------+--------+
                            |
                            v
                    +----------------+
                    |   Docker Hub   |
                    +-------+--------+
                            |
                            |
                  Kubernetes Server
                            |
                            v
                  +-------------------+
                  |    Deployment     |
                  |   replicas: 3     |
                  +---------+---------+
                            |
                            v
                     +-------------+
                     |  ReplicaSet |
                     +------+------+
                            |
              +-------------+-------------+
              |             |             |
              v             v             v
           +------+      +------+      +------+
           | Pod1 |      | Pod2 |      | Pod3 |
           | :3000|      | :3000|      | :3000|
           +--+---+      +--+---+      +--+---+
              |             |             |
              +-------------+-------------+
                            |
                            v
                    +---------------+
                    | Kubernetes    |
                    | Service       |
                    | NodePort      |
                    +-------+-------+
                            |
                            v
                    NodeIP:30080
                            |
                            v
                         Client
