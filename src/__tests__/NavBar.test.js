import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('render App component', () => {
  const navBar = renderer.create(<Router><NavBar /></Router>).toJSON();
  expect(navBar).toMatchSnapshot();
});
