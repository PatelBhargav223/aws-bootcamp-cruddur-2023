FROM node:latest
ENV PORT=3000
COPY . /frontend-react-js
WORKDIR /frontend-react-js 
RUN npm install
EXPOSE ${PORT} 
CMD [ "npm", "start" ]