FROM node:10.15.1-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY ./target ./target
EXPOSE 8080
CMD npm start