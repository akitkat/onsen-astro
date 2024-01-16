#!/bin/sh

mkdir -p static/data

# hotels.json
wget "${JSON_URL_HOTELS}" -O 'hotels.json'
mv -v hotels.json static/data/

# golfCourses.json
wget "${JSON_URL_GOLF_COURSE}" -O 'golfCourses.json'
mv -v golfCourses.json static/data/

node lib/contentful/fetch.js

astro build

rm -rf dist/amp
cp -r dist amp
mv amp dist
cd dist/amp

rm -rf categories tags elements images privacy-policy tags 404.html index.html

# delete files exclude .html
find ./ -type f ! -name "*.html" -delete

# delete empty folders
find ./ -type d -empty -delete

