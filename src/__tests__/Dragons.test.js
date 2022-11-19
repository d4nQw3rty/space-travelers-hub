import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Dragons from '../pages/Dragons';
import store from '../redux/configureStore';

test('Dragons\'s page renders correctly', () => {
  const dragons = renderer.create(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  ).toJSON();

  expect(dragons).toMatchSnapshot();
});
