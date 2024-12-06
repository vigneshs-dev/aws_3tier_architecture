# # Base image
# FROM node:16

# # Set the working directory
# WORKDIR /usr/src/web

# # Copy application files
# COPY . .

# # Install dependencies
# RUN npm install

# # Build the application
# RUN npm run build

# # Expose the web server port (if applicable, adjust as necessary)
# EXPOSE 3000

# # Serve the application with a web server (e.g., `serve` or similar tool)
# # Alternatively, if it just builds static files, you can copy to a production server.
# CMD ["npx", "serve", "-s", "build"]



# Stage 1: Build Stage
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /usr/src/web

# Copy application files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve Stage
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/web

# Install a lightweight web server
RUN npm install -g serve

# Copy the built application from the previous stage
COPY --from=build /usr/src/web/build ./build

# Expose the web server port (adjust as necessary)
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build"]
