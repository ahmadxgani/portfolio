#!/bin/bash

mv ./build/.git ./.temp
npm run build
mv ./.temp ./build/.git
