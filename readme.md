## Query Parser

> A query parameter parsing middleware for oka framework

### Usage 

```ts
// import oak framework
import { Application } from "https://deno.land/x/oak/mod.ts";
// import queryParser
import {queryParser} from 'https://raw.githubusercontent.com/gjuoun/oak-query-parser/master/mod.ts'

const app = new Application();

app.use(queryParser())

app.use((ctx) => {
  ctx.request.query // will become available
});

await app.listen({ port: 8000 });
```

