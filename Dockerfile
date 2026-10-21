FROM node:20-alpine

WORKDIR /app

# Install dependencies first (layer caching — only re-runs if package.json changes)
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY src/ ./src/

EXPOSE 3000

CMD ["node", "src/server.js"]
