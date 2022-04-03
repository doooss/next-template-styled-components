import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CounterState,
  decrease,
  increase,
  increasebynumber,
} from 'store/counter';

interface RootState {
  counter: CounterState;
}

const Home: NextPage = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector<RootState>((state) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(e.target.value));
  };

  const onClickNumber = () => {
    dispatch(increasebynumber(number));
  };

  return (
    <>
      <div>Next js + typescript + styled-components 기본 템플릿 {count}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <input type="number" value={number} onChange={onChangeNumber} />
      <input type="submit" onClick={onClickNumber} />
    </>
  );
};

export default Home;
