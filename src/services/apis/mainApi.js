import axios from 'axios';

// 인스턴스를 생성할때 config 기본값 설정하기
const mainApi = axios.create({
  baseURL: 'http://localhost:3001',
});

export default mainApi;
