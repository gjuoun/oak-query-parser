import { Application, Context } from "https://deno.land/x/oak/mod.ts";
import { parseQuery } from "../lib/query.ts";
const app = new Application();

app.use(parseQuery());


app.use(async (ctx) => {
  
  ctx.response.body = ctx.request.query;
});
console.log(`Server is running at port 8000`);

await app.listen({ port: 8000 });
