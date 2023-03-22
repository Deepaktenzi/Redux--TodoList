import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';

const ShowItem = () => {
  const store = useSelector((store) => store.list);
  console.log(store);
  return (
    <>
      {store.map((val, idx) => {
        return (
          <>
            <Item item={val} key={idx} />
          </>
        );
      })}
    </>
  );
};
export default ShowItem;
