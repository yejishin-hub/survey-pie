import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import questionsState from '../../stores/questions/atom';
import Button from '../Button';

function ActionButtons() {
  const params = useParams();

  const step = parseInt(params.step);
  const questions = useRecoilValue(questionsState);
  const questionsLength = questions.length;

  const isLastStep = step === questionsLength - 1;
  const navigate = useNavigate();
  return (
    <ActionButtonsWrapper>
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
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 73px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
