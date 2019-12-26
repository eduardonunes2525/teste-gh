FROM node:12.10-alpine as develop-stage
RUN mkdir app
WORKDIR /app
COPY ./app/package.json /app
RUN yarn global add @quasar/cli
COPY ./app .

FROM develop-stage as build-stage
RUN yarn
RUN quasar build

FROM nginx:1.17 as production-stage
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/spa/ /usr/share/nginx/html
