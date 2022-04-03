import { useSelector } from 'react-redux';
import { CounterState } from 'store/counter';
import { TodoState } from 'store/todo';

interface ICounter {
  counter: CounterState;
}

interface ITodoState {
  todos: TodoState;
}

const Result = () => {
  const number = useSelector((state: ICounter) => state.counter.count);
  const todos = useSelector((state: ITodoState) => state.todos);
  return (
    <div>
      <p>COUNTER RESULT : {number}</p>
      {todos.map((items, index) => {
        return (
          <tr key={index}>
            <td>{items.id}</td>
            <td>{items.title}</td>
            <td>{items.content}</td>
            <td>{items.date}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default Result;
