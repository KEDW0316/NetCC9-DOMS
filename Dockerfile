FROM node:12
WORKDIR /usr/NetCC9-DOMS

EXPOSE 3000

RUN git clone https://github.com/KEDW0316/NetCC9-DOMS.git
RUN cd NetCC9-DOMS && npm install && npm run start2
