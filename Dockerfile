FROM iregistry.baidu-int.com/hub-official/node:18
ENV TZ "Asia/Shanghai"
ENV NODE_ENV production
ENV PORT 8001
ENV https_proxy http://proxy.npm.baidu-int.com:8269
COPY output /app
WORKDIR /app
EXPOSE 8001
RUN $(npm bin)/prisma generate
CMD ["node", "--no-warnings", "dist/main.js"]