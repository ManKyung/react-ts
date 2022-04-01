import React, { useState, useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DESCREASE' };

type Information = {
  name: string;
  description: string;
};

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DESCREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
};

const Conter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DESCREASE' });
  // const [count, setCount] = useState<number>(0);
  // const [information, setInfomation] = useState<Information | null>(null);
  // const onIncrease = () => setCount(count + 1);
  // const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>더하기</button>
        <button onClick={onDecrease}>빼기</button>
      </div>
    </div>
  );
};

export default Conter;
