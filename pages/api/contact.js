const { Client } = require('@notionhq/client');

const TOKEN = 'secret_WddzLtDHwgyF7kOhmreLgXRHfP4KkzloJmmBYAqICMl';
const databaseID = '46569b14fb694a87ba2f9f5f747846b8';

const notion = new Client({
  auth: TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed`});
  }
  try {
    const { name, email, message } = req.body;
    await notion.pages.create({
      parent: {
        database_id: databaseID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}
