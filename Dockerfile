FROM node:8.15-jessie

WORKDIR /app

COPY ./project .

RUN npm i -g @adonisjs/cli && \
    npm i --quiet --production && \
    npm i -g pm2

EXPOSE 3331

RUN pwd && ls -al

CMD ["pm2-runtime", "start", "server.js"]