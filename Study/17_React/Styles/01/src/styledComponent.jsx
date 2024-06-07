import styled from "styled-components";

// css in js : js 안에 css 작성
// 각 컴포넌트 별로 격리된 스타일 적용 가능
const StyledContainer = styled.div`
  display: flex;
`;
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.bgColor || "blue"};
`;

function StyledComponent() {
  return (
    <StyledContainer>
      <StyledBox bgColor="lightblue"></StyledBox>
      <StyledBox bgColor="pink"></StyledBox>
      <StyledBox></StyledBox>
    </StyledContainer>
  );
}

export default StyledComponent;
