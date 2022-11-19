import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../pages/Rockets';
import store from '../redux/configureStore';

test('Rocket\'s page renders correctly', () => {
  const rockets = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  ).toJSON();

  expect(rockets).toMatchSnapshot();
});
