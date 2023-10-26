# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock* ./

# Install application dependencies using Yarn
RUN yarn install

# Copy the rest of your application code to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Copy the rest of your application code to the container
COPY . .

# Make a directory to drop all the static html files, clear whatever may have been there, and copy them over
RUN mkdir /app/static_html
RUN rm -rf /app/static_html/*
RUN cp -r /app/out/* /app/static_html/

# in case you ever just want your image to hang/stay open
# ENTRYPOINT ["tail", "-f", "/dev/null"]




