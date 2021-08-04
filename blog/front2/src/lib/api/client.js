// 프로젝트가 커지면, API 클라이언트에 공통된 설정을 쉽게 넣어줄 수 있다.
import axios from 'axios';

const client = axios.create();

export default client;
