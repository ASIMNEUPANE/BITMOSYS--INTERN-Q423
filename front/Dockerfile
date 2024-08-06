# Stage 1: Build the application
FROM node:20-alpine3.20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application
FROM node:20-alpine3.20

WORKDIR /app

COPY --from=builder /app/dist ./dist

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
