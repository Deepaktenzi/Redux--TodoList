import { Provider } from 'react-redux';
import AddItem from './AddItem';
import store from './redux/store';
import ShowItem from './ShowItem';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <AddItem />
      <ShowItem />
    </Provider>
  );
};
export default App;
