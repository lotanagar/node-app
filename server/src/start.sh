#!/bin/bash

# Install nodemon globally
echo "Installing nodemon globally..."
npm i: nodemon

# Check if nodemon was installed successfully
if ! command -v nodemon &> /dev/null
then
    echo "nodemon could not be installed"
    exit 1
fi

echo "nodemon installed successfully!"

# Start nodemon
echo "Starting nodemon..."
