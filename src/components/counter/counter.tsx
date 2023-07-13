import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../store"
import { increment, decrement} from "../../store/reducer/counterSlice"

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
