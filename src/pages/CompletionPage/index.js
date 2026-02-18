import styled from 'styled-components';

const a = 12;

function CompletionPage() {
  return <CompletionPageContainer>Completion Page</CompletionPageContainer>;
}

const CompletionPageContainer = styled.div`
  background-color: #cebe89;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${a === 1 ? '100vh' : '50vh'};
`;

export default CompletionPage;
