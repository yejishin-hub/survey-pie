import { useRecoilState } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const [surveyData, setSurvey] = useRecoilState(surveyState);
  const questions = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     setSurvey(res.data);
  //   });
  // }, [surveyId, setSurvey]);

  return questions[step];
}

export default useCurrentQuestion;
