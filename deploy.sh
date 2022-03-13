#!/bin/bash

rm -rf docs
npm run build
npm run export
mv out docs
git add docs
git commit -m "Site update."
git push -u origin main

