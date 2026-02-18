import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      <div>Hello World</div>
      <Routes>
        <Route path="/done" element={<CompletionPage />} />
        <Route path="/survey/:surveyId" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

/* "/survey" 추가로 필요한 것: 설문ID

http://www.surveypie.com/survey?id=abc123
http://www.surveypie.com/survey/abc123
=> "...~survey/abc123" 실제 주소인지, abc123이 파라미터인지 어떻게 판별?
=> "/survey/:surveyId" 라우트로 설정하면, "/survey/abc123" 주소는 surveyId가 abc123인 라우트로 인식됨
 */

export default App;
