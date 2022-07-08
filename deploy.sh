#!/bin/bash

mv ./build/.git ./.temp
npm run build
mv ./.temp ./build/.git
cd ./build
git add .
git commit -m "update"
git push
