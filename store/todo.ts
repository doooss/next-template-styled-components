const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const MODIFY_TODO = 'MODIFY_TODO';

export type Todo = {
  id: number;
  title: string;
  content: string;
  date?: string;
};

export const add_todo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const delete_todo = (todo: Todo) => ({
  type: DELETE_TODO,
  payload: todo,
});

export const modify_todo = (todo: Todo) => ({
  type: MODIFY_TODO,
  payload: todo,
});

export type TodoState = Todo[];

export type TodoAction =
  | ReturnType<typeof add_todo>
  | ReturnType<typeof delete_todo>
  | ReturnType<typeof modify_todo>;

const initialState: TodoState = [];

function todos(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO: {
      if (state.length !== 0) {
        const copy_state = [...state];
        const date = new Date();
        copy_state.push({
          ...action.payload,
          date: date.toLocaleTimeString(),
          id: state[state.length - 1].id + 1,
        });
        return copy_state;
      } else {
        const date = new Date();
        const copy_state = [
          { ...action.payload, date: date.toLocaleTimeString(), id: 1 },
        ];
        return copy_state;
      }
    }
    case DELETE_TODO: {
      if (state) {
        const payload_id = state.findIndex(
          (element) => element.content === action.payload.content,
        );
        const copy_state = [...state];
        copy_state.splice(payload_id, 1);
        return copy_state;
      } else {
        return state;
      }
    }
    case MODIFY_TODO: {
      if (state) {
        const date = new Date();
        const copy_state = [...state];
        copy_state[action.payload.id - 1] = {
          ...copy_state[action.payload.id],
          date: date.toLocaleTimeString(),
          title: action.payload.title,
          content: action.payload.content,
        };
        return copy_state;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}

export default todos;
