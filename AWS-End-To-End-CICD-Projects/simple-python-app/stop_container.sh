#!/bin/bash
set -e

# Get the container ID using docker ps and awk
CONTAINER_ID=$(docker ps | awk 'NR==2{print $1}')

# Check if the container is running
if [ -n "$CONTAINER_ID" ]; then
    # Stop the Docker container
    docker stop $CONTAINER_ID

    # Remove the Docker container
    docker rm $CONTAINER_ID

    echo "Container $CONTAINER_ID stopped and removed successfully."
else
    echo "No running container found."
fi
