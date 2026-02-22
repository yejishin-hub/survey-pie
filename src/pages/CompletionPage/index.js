// import testState from '../../stores/test/atom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import testWithComma from '../../stores/test/testWithComma';

function CompletionPage() {
  const test = useRecoilValue(testWithComma);

  // CORS 정책으로 막힘
  // axios.get('https://www.google.com').then((res) => {

  // [API 서버] https://github.com/hackurity01/survey-pie-server
  axios.get('http://localhost:3001/surveys').then((res) => {
    console.log('response: ', res.data);
  });

  return <CompletionPageContainer>{test}</CompletionPageContainer>;
}

const CompletionPageContainer = styled.div``;

export default CompletionPage;
