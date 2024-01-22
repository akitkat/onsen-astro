require('dotenv').config();
const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
const fs = require('fs');

const getContent = entry => {
  const description = `${entry.fields.body.substring(0, 120).replace(/\*|\s|\n/g, '')}...`
  const body = entry.fields.body.replace(/hotel-info-item/g, 'HotelInfoItem')
    .replace(/><\/HotelInfoItem>/g, ` keywords="${entry.fields.keywords}"><\/HotelInfoItem>`)
    .replace(/golf-course-item/g, 'GolfCourseInfoItem')
    .replace(/<!-- Rakuten Web Services Attribution Snippet FROM HERE -->/g, '')
    .replace(/<!-- Rakuten Web Services Attribution Snippet TO HERE -->/g, '');
  const tags = entry.fields?.tags ? `tags: ${JSON.stringify(entry.fields.tags.map(tag => tag.fields.slug))}` : '';
  return `---
title: "${entry.fields.title}"
description: "${description}"
date: ${entry.fields.publishDate}
image: "https:${entry.fields.heroImage.fields.file.url}"
${tags ? tags : ''}
---
import HotelInfoItem from '../../components/HotelInfoItem.astro';
import GolfCourseInfoItem from '../../components/GolfCourseInfoItem.astro';

${body}`;
}

(async () => {
  const total = await client.getEntries({
    content_type: 'post', limit: 1
  }).then(res => res.total)

  let i = 0
  while(i < total) {
    await client.getEntries({
      content_type: 'post',
      limit: 1000,
      skip: i
    }).then(function (entries) {
      entries.items.forEach(function (entry, index) {
        fs.writeFileSync(`./src/content/posts/${entry.fields.slug}.mdx`, getContent(entry), 'utf-8');
      });
    })

    i += 1000
  }
})();
