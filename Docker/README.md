# Docker

Docker is used to create standalone environments containing all necessary configurations and dependencies for an application

<p align="center">
  <img width="400" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/docker_official_logo_icon_169250.png" alt="docker-img">
</p>

## Advantages

* isolated environment
* packaged with all necessary configurations
* one command to install
* run same application with multiple versions

## What is an Image?

* the actual package or artifact that is portable
* includes app source code and environment configuration (environ variables, directories etc)

## What is a container?

* The environment created from an image
* A running instance of an image
* You can run multiple containers from an image

## Docker register

* A storage for docker images
* Official images like Redis, Mongo, Postgres etc

## Important Commands

* docker images : lists current images installed
* docker ps : lists running containers
* docker ps -a : lists containers regardless of their container status
* docker pull <image\>:version : pull images from the docker register
* docker run <image\>:version|id|name : runs container from image, if image is not pulled it will pull the image
* docker run -d <image\>:version|id|name : runs container detached mode
* docker run -d -p <localport\>:<containerport\> <image\>:version|id|name : binds local network port to container port
