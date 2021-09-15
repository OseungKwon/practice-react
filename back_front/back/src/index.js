require("dotenv").config();
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const { PORT } = process.env;

const api = require("./api");

mongoose.connect(MONGO_URI,{})


const app = new Koa();
const router = new Router();

router.use("/api", api.routes());
//바디파서(미들웨어중 하나)=> api 기능을 구현하기위해 필요
//POST/PUT/PATCH같은 HTTP METHOD들의 Req body에 JSON형식으로 데이터를 넣어 주면,
//이를 파싱해서 사용할 수 있도록 한다.
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log("listeneing to port %d", PORT);
});
