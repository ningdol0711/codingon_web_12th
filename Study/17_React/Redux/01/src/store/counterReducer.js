// State 초기값 정의
const initalState = {
  number: 10,
}

const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// 컴포넌트에서 액션을 쉽게 발생시킬수 있도록 함수 사용
export const plus = () => ({type: 'counter/PLUS'});
export const minus = () => ({type: 'counter/MINUS'});

// reducer 정의, 상태 변화를 일으키는 함수
const counterReducer = (state = initalState, action) => {
  switch(action.type) {
    case PLUS:
      return {number: state.number + 1};
    
    case MINUS:
      return {number: state.number - 1};
      
    default:
      return state;
  }
}

export default counterReducer;