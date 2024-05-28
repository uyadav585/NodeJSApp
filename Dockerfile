# Use the official Node.js image based on Alpine
FROM node:18-alpine3.18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) first
# This leverages Docker's caching mechanism
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application
CMD [ "npm", "run", "start" ]
