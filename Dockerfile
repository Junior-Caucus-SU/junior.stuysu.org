FROM node:20-alpine
RUN apk update && apk upgrade && apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./ /usr/src/app
ENV NODE_ENV production
ENV PORT 80
RUN npm install --omit=dev && npm cache clean --force && npm run build
RUN rm -rf node_modules
EXPOSE 80
RUN npm install -g serve
CMD [ "serve", "-s", "build" ]
