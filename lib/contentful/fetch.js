require('dotenv').config();
const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
const fs = require('fs');

const getContent = entry => {
  const body = entry.fields.body.replace(/hotel-info-item/g, 'HotelInfoItem')
    .replace(/><\/HotelInfoItem>/g, ` keywords="${entry.fields.keywords}"><\/HotelInfoItem>`);
  const categories = entry.fields?.tags ? `categories: ${JSON.stringify(entry.fields.tags.map(tag => tag.fields.slug))}` : '';
  return `---
title: "${entry.fields.title}"
date: ${entry.fields.publishDate}
image: "https://${entry.fields.heroImage.fields.file.url}"
${categories ? categories : ''}
---
import HotelInfoItem from '../../components/HotelInfoItem.astro';

${body}`;
}

(async () => {
  client
    .getEntries({
      content_type: 'post',
    })
    .then(function (entries) {
      entries.items.forEach(function (entry, index) {
        // 2個だけ取得
        // if (index < 2) {
          fs.writeFileSync(`./src/content/posts/${entry.fields.slug}.mdx`, getContent(entry), 'utf-8');
        // }
      });
    });
})();
