import styled from 'styled-components';

function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, index) => {
    if (isChecked) {
      // setAnswer(index 추가)
      setAnswer([...answer, index]);
    } else {
      // setAnswer(index 제거)
      // 배열을 필터링하여 index가 아닌 요소만 남김
      setAnswer(answer.filter((item) => item !== index));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((option, index) => (
        <Item
          key={index}
          onChange={(e) => handleChange(e.target.checked, index)}
        >
          {option}
        </Item>
      ))}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// styled-components는 SCSS이기 때문에 아래와 같은 문법 작성이 가능함
const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
    div {
      background-color: #ad5757;
    }
  }

  input[type='checkbox'] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type='checkbox'] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
