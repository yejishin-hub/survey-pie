import styled from 'styled-components';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  color: #121111;
  margin: 0; // h1 태그에는 기본적으로 margin이 존재하기 때문에, 이를 제거하기 위해 margin: 0을 추가

  span {
    margin-right: 12px;
  }
`;

export default Title;
