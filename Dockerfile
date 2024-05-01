FROM node:18-alpine AS base

WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npm i
RUN npm run build

# Running the app

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]