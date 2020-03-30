const Koa = require("koa");
const route = require("koa-route");
const bodyParser = require("koa-bodyparser");

const { query } = require("./db/index");

const app = new Koa();

// 注意require('koa-router')返回的是函数:
const router = require("koa-router")();

// 由于middleware的顺序很重要，这个koa-bodyparser必须在router之前被注册到app对象上。
app.use(bodyParser());

// add router middleware:
app.use(router.routes());

const main = function(ctx) {
  // koa设置cookies
  const n = Number(ctx.cookies.get("view") || 0) + 1;
  ctx.cookies.set("view", n);
  ctx.response.body = n + " views";
};

const demo = ctx => {
  ctx.response.body = "hello demo";
};

const redirect = ctx => {
  ctx.response.redirect("/");
  ctx.response.body = "<a href='/'>主页</a>";
};

const items = async ctx => {
  console.log(ctx.request);
  const res = await query("SELECT * from todolist");
  console.log(res);

  ctx.response.body = res;
};

console.log("over");
// app.use(async ctx => {
//   ctx.body = "Hello World";
// });
// app.use(route.routes());
app.use(route.get("/", main));
app.use(route.get("/demo", demo));
app.use(route.get("/err", redirect));
app.use(route.post("/queryTodoItems", items));
// app.use(main);

app.listen(4000);

global.console.log("🚕 server listening at port 4000");
