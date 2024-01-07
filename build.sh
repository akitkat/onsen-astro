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
