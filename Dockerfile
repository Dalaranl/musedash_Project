FROM node:16.13.1

WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start