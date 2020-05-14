import { Context } from "https://deno.land/x/oak/mod.ts";

declare module "https://deno.land/x/oak/mod.ts" {
  interface Request {
    query: queryParams;
  }
}

// let a :IterableIterator
interface queryParams extends Record<string, string> { }

export function parseQuery(options: any = null) {
  return function (ctx: Context, next: Function) {
    // if search query exists in url
    if (ctx.request.url.search) {
      const queryParams: queryParams = {};
      const entries = ctx.request.url.searchParams.entries();

      for (let entry of entries) {
        const [key, value] = entry;
        if (!queryParams[key]) {
          queryParams[key] = value;
        }
      }
      ctx.request.query = queryParams;
      next();
    } else {
      next();
    }
  };
}
