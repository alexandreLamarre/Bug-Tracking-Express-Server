FROM node:14
# create our app working directory
RUN mkdir - p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm install
# also can use for production:
# RUN npm ci --only=production

#Bundle App source
COPY . /usr/src/app

#Bind to port:
EXPOSE 8080

CMD ["ls"]
#set VM command to run the server
CMD ["node", "server.js"]


