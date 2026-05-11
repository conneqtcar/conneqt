FROM node:20-alpine
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9

# Copy workspace manifests (sem instalar ainda — melhor uso de cache)
COPY package.json pnpm-workspace.yaml ./
COPY pnpm-lock.yaml* ./
COPY packages/database/package.json packages/database/
COPY apps/api/package.json apps/api/
COPY packages/types/package.json packages/types/

# Instala apenas dependências de produção, sem rodar postinstall scripts
RUN pnpm install \
    --filter @conneqtcar/api \
    --filter @conneqtcar/database \
    --prod \
    --ignore-scripts \
    --no-frozen-lockfile

# Copia o schema do Prisma e gera o client
COPY packages/database/prisma packages/database/prisma
RUN cd packages/database && npx prisma generate

# Copia os dist pré-compilados (gerados localmente antes do commit)
COPY packages/database/dist packages/database/dist
COPY apps/api/dist apps/api/dist

# Render injeta PORT automaticamente
EXPOSE 10000

CMD ["node", "apps/api/dist/main.js"]
