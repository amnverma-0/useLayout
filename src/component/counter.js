import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  if (action.type === 'increement') {
    return { count: state.count + 1 };
  } else if (action.type === 'decreement') {
    return { count: state.count - 1 };
  }
  return state;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increement' })}>+</button>
      <button onClick={() => dispatch({ type: 'decreement' })}>-</button>
    </div>
  );
}

export default Counter;
