import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoItem } from '/redux/TodoSlice';
const AddItem = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);

  const addItem = () => {
    dispatch(addTodoItem(item));
    setItem(['']);
  };
  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem}>Add </button>
    </>
  );
};
export default AddItem;
