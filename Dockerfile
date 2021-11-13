FROM node:14

RUN mkdir /app

# setting work dirctory
WORKDIR /app

ADD ./package*.json /app/

RUN npm cache clean --force

RUN rm -rf node_modules

RUN npm install

ADD . /app/

CMD ["bash", "entrypoint.sh"]
