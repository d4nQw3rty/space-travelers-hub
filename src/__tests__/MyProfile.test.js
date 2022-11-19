import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../pages/MyProfile';
import store from '../redux/configureStore';

test('My Profile\'s page renders correctly', () => {
  const myProfile = renderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  ).toJSON();

  expect(myProfile).toMatchSnapshot();
});
