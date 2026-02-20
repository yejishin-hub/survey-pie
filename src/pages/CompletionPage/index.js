import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import testState from '../../stores/test/atom';
import testWithComma from '../../stores/test/testWithComma';

function CompletionPage() {
  const test = useRecoilValue(testWithComma);

  return <CompletionPageContainer>{test}</CompletionPageContainer>;
}

const CompletionPageContainer = styled.div``;

export default CompletionPage;
