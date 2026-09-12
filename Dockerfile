FROM node:22-slim AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install -g npm@10.8.0 \
    && npm ci --no-audit --no-fund

COPY . .
RUN npm run build

FROM node:22-slim AS production

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static .next/static/
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]