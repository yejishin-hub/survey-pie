import mainApi from './apis/mainApi';

// 아래와 같이 지정해주면 axios 요청 시 매번 URL을 작성할 필요 없음
// [방법 1]
// axios.defaults.baseURL = 'http://localhost:3001';
// [방법 2]
// import mainApi from '../../services/apis/mainApi';

function getSurvey(surveyId) {
  return mainApi.get(`/surveys/${surveyId}`);
}

export default getSurvey;
