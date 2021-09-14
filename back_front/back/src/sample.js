const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

// ctx = context 줄임말=> 웹 요청과 응답에 관한 정보를 지니고 있다
// next => 현재 처리 중인 미들웨어의 다음 미들웨어를 호출하는 함수

// 라우터: 경로
// 파라미터: /about/:name 과 같이 ':'를 사용해 읽는다.
// 쿼리: /posts/?id=10 과 같이 '?='를 사용해 읽는다.

router.get("/", (ctx) => {
  ctx.body = "홈";
});
router.get("/about", (ctx) => {
  ctx.body = "소개";
});

// 파라미터를 사용해 데이터 동적으로 받기
// => 처리할 작업의 카테고리를 받아오거나, 고유 ID 혹은 이름으로 특정 데이터를 조회할 때 사용
router.get("/about/:name?", (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `${name}의 소개` : "소개";
});

// 쿼리를 사용해 데이터 동적으로 받기
// => 주로 옵션에 관련된 정보 받아옴
router.get("/posts", (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `포스트 ${id}` : "포스트 아이디가 없습니다.";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
