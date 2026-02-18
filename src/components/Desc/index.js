import styled from 'styled-components';

// 스타일 적용만 필요한 경우 컴포넌트로 만들 필요 없이 styled로 바로 내보내도 됨
// function Desc({ children }) {
//   return <DescWrapper>{children}</DescWrapper>;
// }

const Desc = styled.h4`
  font-size: 18px;
  line-height: 21px;
  color: #463c3c;
  font-weight: normal;
  margin-top: 17px;
  margin-bottom: 60px;
  margin-left: 38px;
`;

export default Desc;
