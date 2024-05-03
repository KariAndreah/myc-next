# STAGE 1: install
FROM node:21.4.0-alpine AS base
WORKDIR /base
# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci -only=prod
# Copy Project 
COPY . . 

# STAGE 2: build 
FROM base AS build 
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build


# STAGE 3: app
FROM node:21.4.0-alpine AS app
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next/
COPY --from=build /build/public ./public/
COPY --from=build /build/node_modules ./node_modules/
COPY --from=build /build/next.config.mjs .


# Running the app
EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]