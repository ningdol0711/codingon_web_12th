// 목표: 은행에서 입금/출금이라는 2가지 행위

const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

export const deposit = () => ({ type: DEPOSIT });
export const withdraw = () => ({ type: WITHDRAW });

const initialState = 0;

const bankReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action.type, action.payload, typeof action.payload);

  switch (action.type) {
    case DEPOSIT:
      return state + action.payload; // 입금
    case WITHDRAW:
      return state - action.payload; // 출금
    default:
      return state;
  }
};

export default bankReducer;