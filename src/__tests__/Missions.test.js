import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../pages/Missions';

describe('Missions', () => {
  test('renders correctly', () => {
    const missions = renderer
      .create(<Provider store={store}><Router><Missions /></Router></Provider>)
      .toJSON();
    expect(missions).toMatchSnapshot();
  });
});
