FROM iregistry.baidu-int.com/ee-fe/fcnap:20.1.0-alpine3.17-extra
ENV TZ "Asia/Shanghai"
ENV NODE_ENV production
ENV PORT 8080
ENV https_proxy http://proxy.npm.baidu-int.com:8269
COPY output /home/node/app
WORKDIR /home/node/app
EXPOSE 8080
RUN ./node_modules/.bin/prisma generate
CMD ["node",  "dist/main.js"]