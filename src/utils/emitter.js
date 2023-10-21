const { EventEmitter } = require("node:events");
const { faker } = require("@faker-js/faker");
const fetch = require("node-fetch");

const { wait } = require("./index");

const WEBHOOK_URL = "http://localhost:3000/api/webhooks/blog-post";
const CREATE_BLOG = "CREATE_BLOG";

const emitter = new EventEmitter();

emitter.on(CREATE_BLOG, async (data) => {
  await wait({ delay: 5000 });
  const blog = {
    id: faker.string.uuid(),
    title: faker.lorem.sentence({ max: 2 }),
    body: faker.lorem.paragraph({ min: 5, max: 8 }),
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify(blog),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const responseData = await res.json();
    console.log("Webhook emitter/ Response from Next.js: ", responseData);
  } catch (error) {
    console.log("Webhook emitter/ Error :>> ", error);
  }
});

module.exports = { emitter, CREATE_BLOG };
