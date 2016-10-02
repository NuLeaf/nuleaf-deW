FROM node:slim
MAINTAINER Nuleaf Technologies

COPY ./nuleaf-dew /nuleaf-dew
WORKDIR /nuleaf-dew

RUN npm install && npm run typings install

ENTRYPOINT ["npm", "start"]