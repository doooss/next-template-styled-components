const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_BY_NUMBER = 'INCREASE_BY_NUMBER';

export const increase = () => ({ type: INCREASE } as const);
export const increasebynumber = (param: number) =>
  ({ type: INCREASE_BY_NUMBER, payload: param } as const);
export const decrease = () => ({ type: DECREASE } as const);

const initialState: CounterState = { count: 0 };

export type CounterState = { count: number };
export type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increasebynumber>;

function counter(
  state: CounterState = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY_NUMBER:
      return { count: state.count + action.payload };
    default:
      return { count: state.count };
  }
}

export default counter;
