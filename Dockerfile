FROM node:alpine
MAINTAINER NuLeaf Tech Inc.

WORKDIR /nuleaf-dew

COPY ./nuleaf-dew/package.json /tmp/package.json
COPY ./nuleaf-dew/typings.json /tmp/typings.json
RUN cd /tmp && npm install && npm run typings install

COPY ./nuleaf-dew /nuleaf-dew
RUN cp -a /tmp/node_modules . && \
    cp -a /tmp/typings . && \
    npm run build:aot

ENTRYPOINT ["npm", "run", "server"]