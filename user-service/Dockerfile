FROM node:14

# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install npm globally and clear npm cache
#RUN npm install -g npm@latest
#RUN npm cache clean --force
RUN npm cache verify
# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3001

# Start the application
CMD ["node", "app.js"]