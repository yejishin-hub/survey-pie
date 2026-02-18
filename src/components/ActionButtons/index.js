import { useNavigate } from 'react-router-dom';

function ActionButtons({ questionsLength, step, surveyId }) {
  const isLastStep = step === questionsLength - 1;
  const navigate = useNavigate();
  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLastStep ? (
        <button
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ActionButtons;
