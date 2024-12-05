# Base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy application files
COPY . .

# Install dependencies
RUN npm install

# Install pm2 globally
RUN npm install -g pm2

# Expose the application port
EXPOSE 4000

# Start the application using pm2
CMD ["pm2-runtime", "index.js"]
