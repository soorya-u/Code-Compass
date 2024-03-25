# Docker Reference

## Introduction

Docker is a software platform that helps spin up Virtual Machines that allows faster build, test, and deploy applications quickly.

### Contents

1. [Containers](#containers)

2. [Images](#images)

3. [Port Mapping](#port-mapping)

4. [Environment Variables](#environment-variables)

5. [Dockerfile](#dockerfile)

6. [Building and Pushing Custom Docker Image](#building-and-pushing-custom-docker-image)

7. [Docker Compose](#docker-compose)

8. [Docker Networking](#docker-networking)

   - [Types of Docker Networking](#types-of-docker-networking)

   - [Creating Custom Network](#creating-custom-network)

9. [Volume Mounting](#volume-mounting)

10. [Efficient Caching in Layers](#efficient-caching-in-layers)

11. [References](#references)

---

## Containers

Containers Contains all the Configuration to Replicate an Environment like OS and Dependencies.

Containers are similar to that of a Physical Machine.

The Data inside Containers are not Shared between each other.

- To Create a new Docker Container:

  ```bash
  docker run image-name
  docker run --name container-name image-name # To name a Container
  docker run -it image-name # Interactive TDI Session
  ```

- To List Docker Container:

  ```bash
  docker container ls # Running Containers Only
  docker container ls -a # All Containers
  ```

- To Start and Stop a Docker Container:

  ```bash
  docker start container-name
  docker stop container-name
  ```

- To Execute a Command within Docker Container:

  ```bash
  docker exec container-name command # Returns the Result of the Command
  docker exec -it container-name command # Does not Exit out of Container
  ```

---

## Images

Images behave similar to that of OS.

The Same Images can be run on Muliple Containers.

We create a Custom Image to Run our Application with required Dependencies.

- To List Docker Images:

  ```bash
  docker images
  docker images ls
  ```

---

## Port Mapping

The Ports of Containers are Isolated from that of Local Machine.

Inorder to Expose the Container Ports to the Local Machine, we use Port Mapping.

- To Expose the Port:

  ```bash
  docker run -p local-port:container-port container-name
  docker run -it -p 7000:7000 nodejs # Example
  ```

---

## Environment Variables

Environment Variables can be passed to the Container.

- To Create a Environment Variable:

  ```bash
  docker run -e key=value -e key=value
  ```

---

## Dockerfile

Dockerfile is a Special File which is used to Containerize an Application.

Dockerfile is created in the working Directory of the Application.

The Dockerfile is as Follows:

- To Set a Base Image:

  ```Dockerfile
  FROM base-image
  ```

- To Run commands that is executed only while creating the Container

  ```Dockerfile
  RUN command
  RUN command
  ```

- To copy Files and Direcories

  ```Dockerfile
  COPY source-file-name-1 dist-file-name-1
  COPY source-file-name-2 /dist-path/dist-file-name-2
  ```

- To Copy all the Files and Direcories in _Dockerfile_ :

  ```Dockerfile
  COPY . /dist-path/.
  ```

- To Ignore few Files and Directories we use a special File called _.dockerignore_.

  ```dockerignore
  # .dockerignore File

  fileName.fileExtension
  /folderName
  ```

- To Set a Working Directory

  ```Dockerfile
  WORKDIR /dist-path
  # This Avoids use of /dist-path/
  ```

- To Run commands that is executed whenever the Container is Used

  ```Dockerfile
  ENTRYPOINT [ "executable", "parameters" ]
  ```

_Example File:_

```DockerFile
FROM node

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "start" ]
```

---

## Building and Pushing Custom Docker Image

A Custom Docker Image is built using Dockerfile.

- To Build a Docker Image:

  ```bash
  docker build -t image-name Dockerfile-path[.]
  ```

The Docker Hub is where the Custom Docker Image can be made Public.

- To Connect Docker Hub Account to Local Machine:

  ```bash
  docker login
  ```

- To Push a Docker Container:

  ```bash
  docker push repo-name
  ```

---

## Docker Compose

Docker Compose is a File used to Create and Destroy Multiple Containers for the Same Application

The _docker-compose.yml_ File is as Follows:

```yml
# Version of Docker Compose
version: "1.0"

services:
  service-name:
    image: image-name # Pulled from hub.docker.com
    ports:
      - "local-port:container-port"
      - "local-port:container-port"
    environment:
        KEY: value
        KEY: value
        KEY: value

  another-service-name:
    image: another-image-name # Pulled from hub.docker.com
    ports:
      - "local-port:container-port"
    environment:
        KEY: value

```

To Add a Docker Compose File:

```bash
docker compose up
docker compose up -d # Detached mode - To run in background
```

To Remove a Docker Compose File:

```bash
docker compose down
```

_Example File:_

```yml
version: "1.0"

services:
  postgres:
    image: postgres
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_DB: review
      POSTGRES_PASSWORD: password

  redis:
    image: redis
    ports:
      - "6379:6379"
```

---

## Docker Networking

Container networking refers to the ability for containers to connect to and communicate with each other, or to non-Docker workloads.

- To Find all Types of Network:

  ```bash
  docker network ls
  ```

- To Find all the Containers using a Network:

  ```bash
  docker network inspect network-name
  ```

### Types of Docker Networking

1. _bridge_ Networking:

   - A Bridge Network is established between Host system and Containers.

   - All the Containers are connected to this Bridge.

   - This Enables Docker to have access to Internet.

   - This is the Default Network

   - Port Mapping is Required.

2. _host_ Networking

   - The Containers are Directly connected to Host system.

   - Port Mapping is not Required.

   To Connect the Containers using Host Network:

   ```bash
   docker run -it --network=host image-name
   ```

3. _none_ Networking

   - The Container is not Connected to the Internet

   To Disable Networking:

   ```bash
   docker run -it --network=none image-name
   ```

### Creating Custom Network

Custom Network Can be Created to make the Containers Commuicate with each other as they both are under same Network.

- To create and Use a Custom Network:

  ```bash
  docker network create -d bridge network-name # creating a network

  docker run -it --network=network-name --name container-name image-name # Using Custom Network
  ```

---

## Volume Mounting

Each Container has Specified Amount of Memory Assigned to it.

Whenever the Container is Destroyed, all the Data within it is Erased as Well.

Volume Mounting is mounting a Specific Directory of the Host Machine to a Container.

This way, the Container has access to that Directory. Whenever the Container is Destroyed, the Directory remains safe.

To Map the Directory:

```bash
docker run -it -v local-machine-path:container-path
```

---

## Efficient Caching in Layers

In a _Dockerfile_, each line is called Layers

Once the Docker Image is built using _Dockerfile_, each Layers are Cached.

While rebuilding a image, the cached Layers are not rerun again to save time.

Once a Particular Layer is Changed, all the Layers below it are rerun again.

Therefore, each Layers Should be Placed In an efficient Order.

---

## References

---
