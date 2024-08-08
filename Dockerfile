FROM node:20-alpine
    WORKDIR /home/node/url-shortener-frontend
    COPY . .
    RUN npm install
    CMD ["node", "server"]