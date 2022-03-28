import * as fs from 'fs';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: "blog not found" })
    }
    res.status(200).json(JSON.parse(data))
  });
}
