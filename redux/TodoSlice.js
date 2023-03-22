import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'TodoList',
  initialState: {
    list: [],
  },
  reducers: {
    addTodoItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeTOdoItem: (state, action) => {
      const idx = state.list.indexOf(action.payload);
      state.list.splice(idx, 1);
    },
  },
});

export const { addTodoItem, removeTOdoItem } = TodoSlice.actions;
export default TodoSlice.reducer;
