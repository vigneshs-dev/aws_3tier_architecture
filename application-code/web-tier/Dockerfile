# Base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/web

# Copy application files
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the web server port (if applicable, adjust as necessary)
EXPOSE 3000

# Serve the application with a web server (e.g., `serve` or similar tool)
# Alternatively, if it just builds static files, you can copy to a production server.
CMD ["npx", "serve", "-s", "build"]
