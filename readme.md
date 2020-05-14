## Query Parser

> A query parameter parsing middleware for oka framework

### Usage 

```ts
import {parseQuery} from 'https://raw.githubusercontent.com/gjuoun/query-parser/master/mod.ts'

const app = new Application();

app.use(parseQuery())
```
Then **ctx.request.query** will become available to the server

