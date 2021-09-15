const Router = require("koa-router");
const posts = new Router();

const postsCtrl = require("./posts.ctrl");

const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params
  };
};
posts.get("/", postsCtrl.list);
posts.post("/", postsCtrl.write);
/*
posts.get("/:id", printInfo);
posts.delete("/:id", printInfo);
posts.put("/:id", printInfo);
posts.patch("/:id", printInfo);
*/

module.exports = posts;
