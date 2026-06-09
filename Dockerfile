# 1. Base común para todas las etapas
FROM node:20-alpine AS base

# 2. Etapa de dependencias: Instalamos solo lo necesario
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# 3. Etapa de construcción: Compilamos la app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 4. Etapa final de ejecución: Aquí es donde ocurre la magia del ahorro de espacio
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Creamos un usuario del sistema sin privilegios de root por seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiamos la carpeta pública (imágenes, favicons, etc.)
COPY --from=builder /app/public ./public

# Damos permisos correctos a la caché
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiamos solo el bundle standalone optimizado y los archivos estáticos compilados
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000

# Next.js standalone expone un archivo server.js listo para ser ejecutado con node puro
CMD ["node", "server.js"]