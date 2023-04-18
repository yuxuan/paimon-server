#!/usr/bin/env bash

echo "node: $(node -v)"
echo "pnpm: $(pnpm -v)"

export http_proxy=http://proxy.npm.baidu-int.com:8269
export https_proxy=http://proxy.npm.baidu-int.com:8269

rm -rf dist output

pnpm install

NODE_ENV=production pnpm run build

mkdir output
cp -r dist prisma node_modules output

echo "build success"
