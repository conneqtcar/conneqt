FROM node:20-alpine
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9

# Copy workspace manifests
COPY package.json pnpm-workspace.yaml ./
COPY pnpm-lock.yaml* ./
COPY packages/database/package.json packages/database/
COPY apps/api/package.json apps/api/
COPY packages/types/package.json packages/types/

# Instala apenas dependências de produção, sem rodar postinstall/prisma
RUN pnpm install \
    --filter @conneqtcar/api \
    --filter @conneqtcar/database \
    --prod \
    --ignore-scripts \
    --no-frozen-lockfile

# Copia os dist pré-compilados (dist/generated inclui o cliente Prisma para runtime)
COPY packages/database/dist packages/database/dist
COPY apps/api/dist apps/api/dist

# Render injeta PORT automaticamente
EXPOSE 10000

CMD ["node", "apps/api/dist/main.js"]
