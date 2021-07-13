#!/bin/bash

mv ./build/.git ./.temp
npm run build
cd ./build && git push && cd ..
mv ./.temp ./build/.git
