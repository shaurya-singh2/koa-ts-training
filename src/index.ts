// const Koa = require("koa");
// const Router = require("koa-router");
import Koa from "koa";
import Router from "koa-router";
import { Context } from "koa";

const app = new Koa();
const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.body = "Welcome to koa-ts-training";
});

router.get("/api/v1/hello", (ctx: Context) => {
  ctx.body = "Hello to Koa";
});

router.get("/api/v1/error", (ctx: Context) => {
  ctx.body = "an error occurred";
});

app.use(router.routes());

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`koa started on ${PORT}`);
});
