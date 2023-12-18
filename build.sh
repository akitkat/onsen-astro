#!/bin/sh

# hotels.json
wget "${JSON_URL_HOTELS}" -O 'hotels.json'
mv -v hotels.json static/data/

# golfCourse.json
wget "${JSON_URL_GOLF_COURSE}" -O 'golfCourse.json'
mv -v golfCourse.json static/data/

npm astro build
