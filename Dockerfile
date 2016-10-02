FROM node:slim
MAINTAINER Nuleaf Technologies

COPY ./nuleaf-dew /nuleaf-dew
RUN cd /nuleaf-dew \
  && npm install

ENTRYPOINT ["/nuleaf-dew/docker-entrypoint.sh"]