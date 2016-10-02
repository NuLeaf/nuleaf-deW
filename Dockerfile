FROM node:slim
MAINTAINER Nuleaf Technologies

COPY ./nuleaf-dew /nuleaf-dew
RUN cd /nuleaf-dew \
  && npm install

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]