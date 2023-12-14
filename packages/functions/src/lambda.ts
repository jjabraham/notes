import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (_evt) => {
  console.log("HOWDY!!!!", _evt);
  return {
    statusCode: 200,
    body: `Hello the world. The time is ${new Date().toISOString()}`,
  };
});
