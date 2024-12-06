# # Base image
# FROM node:16

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy application files
# COPY . .

# # Install dependencies
# RUN npm install

# # Install MySQL2
# RUN npm install mysql2

# # Install pm2 globally
# RUN npm install -g pm2

# # Expose the application port
# EXPOSE 4000

# # Start the application using pm2
# CMD ["pm2-runtime", "index.js"]



# Stage 1: Build
FROM node:16-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Copy the application source
COPY . .

# Stage 2: Runtime
FROM node:16-alpine

WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app .

# Install MySQL2
RUN npm install mysql2

# Install PM2 globally
RUN npm install -g pm2

EXPOSE 4000

CMD ["pm2-runtime", "index.js"]

