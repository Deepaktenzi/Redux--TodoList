import { useDispatch } from 'react-redux';
import { removeTOdoItem } from './Redux/TodoSlice';

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeTOdoItem(item));
  };

  return (
    <>
      <div>
        <span>{item}</span>
        <button onClick={() => removeItem(item)}>Done</button>
      </div>
    </>
  );
};
export default Item;
