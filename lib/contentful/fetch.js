require('dotenv').config();
const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
const fs = require('fs');

const getPostContent = entry => {
  const body = entry.fields.body.replace(/hotel-info-item/g, 'HotelInfoItem')
    .replace(/><\/HotelInfoItem>/g, ` keywords="${entry.fields.keywords}"><\/HotelInfoItem>`)
    .replace(/golf-course-item/g, 'GolfCourseInfoItem')
    .replace(/<!-- Rakuten Web Services Attribution Snippet FROM HERE -->/g, '')
    .replace(/<!-- Rakuten Web Services Attribution Snippet TO HERE -->/g, '');
  const tags = entry.fields?.tags ? `tags: ${JSON.stringify(entry.fields.tags.map(tag => tag.fields.slug))}` : '';
  return `---
title: "${entry.fields.title}"
date: ${entry.fields.publishDate}
image: "https:${entry.fields.heroImage.fields.file.url}"
${tags ? tags : ''}
---
import HotelInfoItem from '../../components/HotelInfoItem.astro';
import GolfCourseInfoItem from '../../components/GolfCourseInfoItem.astro';
import { Image } from 'astro:assets';

${body}`;
}

(async () => {
  const total = await client.getEntries({
    content_type: 'post', limit: 1
  }).then(res => res.total)

  let i = 0
  while(i < 1) {
    await client.getEntries({
      content_type: 'post',
      limit: 2,
      skip: i
    }).then(function (entries) {
      entries.items.forEach(function (entry, index) {
        fs.writeFileSync(`./src/content/posts/${entry.fields.slug}.mdx`, getPostContent(entry), 'utf-8');
      });
    })

    i += 1000
  }

  await client.getEntries({
    content_type: 'page',
  }).then(function (entries) {
    entries.items.forEach(function (entry) {
      fs.writeFileSync(
        `./src/content/pages/${entry.fields.slug}.mdx`,
        `---
title: "${entry.fields.title}"
---
${entry.fields.body}`,
        'utf-8'
      );
    });
  })
})();
