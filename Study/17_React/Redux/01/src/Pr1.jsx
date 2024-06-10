import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './store/moneyReducer';

export default function Bank() {
  const [input, setInput] = useState(); // local state
  const money = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>코딩온 은행</h1>
      <h2>잔액: {money}원</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        // onClick={() => dispatch({ type: DEPOSIT, payload: Number(input) })}
        onClick={() => dispatch({ ...deposit(), payload: Number(input) })}
      >
        입금
      </button>
      <button
        // onClick={() => dispatch({ type: WITHDRAW, payload: Number(input) })}
        onClick={() => dispatch({ ...withdraw(), payload: Number(input) })}
      >
        출금
      </button>
    </div>
  );
}