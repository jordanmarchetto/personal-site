# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install application dependencies using Yarn
RUN yarn install

# Copy the rest of your application code to the container
COPY . .

# Build the Next.js application
RUN yarn build

