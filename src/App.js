import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/done" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f6f6;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 700px;
  min-height: 500px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  box-sizing: border-box;
  padding: 60px;
  display: flex;
`;

/* "/survey" 추가로 필요한 것: 설문ID

http://www.surveypie.com/survey?id=abc123
http://www.surveypie.com/survey/abc123
=> "...~survey/abc123" 실제 주소인지, abc123이 파라미터인지 어떻게 판별?
=> "/survey/:surveyId" 라우트로 설정하면, "/survey/abc123" 주소는 surveyId가 abc123인 라우트로 인식됨
 */

export default App;
