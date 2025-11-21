# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Set dummy environment variables for build (required by Better Auth)
# These will be overridden at runtime with actual values
ENV NEXT_PUBLIC_APP_URL=http://localhost:10001
ENV POLAR_ACCESS_TOKEN=dummy
ENV GOOGLE_CLIENT_ID=dummy
ENV GOOGLE_CLIENT_SECRET=dummy
ENV NEXT_PUBLIC_PLATINUM_TIER=dummy
ENV NEXT_PUBLIC_PLATINUM_SLUG=dummy
ENV NEXT_PUBLIC_DIAMOND_TIER=dummy
ENV NEXT_PUBLIC_DIAMOND_SLUG=dummy
ENV POLAR_WEBHOOK_SECRET=dummy
ENV DATABASE_URL=postgresql://dummy:dummy@dummy:5432/dummy

# Build the application
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public

# Copy standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 10001

ENV PORT=10001
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
