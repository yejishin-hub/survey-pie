import { useNavigate } from 'react-router-dom';

import Button from '../Button';

function ActionButtons({ questionsLength, step, surveyId }) {
  const isLastStep = step === questionsLength - 1;
  const navigate = useNavigate();
  return (
    <div>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLastStep ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="TERTIARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </div>
  );
}

export default ActionButtons;
