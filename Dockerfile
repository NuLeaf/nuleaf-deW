FROM node:slim
MAINTAINER Nuleaf Technologies

COPY ./nuleaf-dew /nuleaf-dew
WORKDIR /nuleaf-dew

RUN npm install

ENTRYPOINT ["npm", "start"]