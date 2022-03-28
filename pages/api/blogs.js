import path from 'path';
import * as fs from 'fs';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let blogData = [];
  const jsonsInDir = fs.readdirSync('blogdata');
  jsonsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join('blogdata', file), 'utf-8');
    const json = JSON.parse(fileData);
    blogData = [...blogData, json]
  });
  res.status(200).json(blogData)
}
