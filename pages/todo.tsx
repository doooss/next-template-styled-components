import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_todo, Todo, TodoState } from 'store/todo';

interface RootState {
  todos: TodoState;
}

const TodoPage = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const [data, setData] = useState<Todo>({
    id: 0,
    title: '',
    content: '',
  });
  const dispatch = useDispatch();

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({
      ...data,
      title: e.target.value,
    });
  };

  const changeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setData({
      ...data,
      content: e.target.value,
    });
  };

  const ADD = async () => {
    dispatch(add_todo(data));
  };

  return (
    <>
      <div>
        <table>
          <th>
            <td>no</td>
            <td>제목</td>
            <td>시간</td>
          </th>
          {todos.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.title}</td>
                <td>{items.date}</td>
              </tr>
            );
          })}
        </table>
        <input type="text" value={data.title} onChange={changeTitle} />
        <textarea value={data.content} onChange={changeContent} />
        <button onClick={ADD}>버튼</button>
      </div>
    </>
  );
};

export default TodoPage;
