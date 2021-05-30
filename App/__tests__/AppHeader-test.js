import React from 'react';
import renderer from 'react-test-renderer';
import AppHeader from '../components/AppHeader'

test('renders correctly', () => {
  const tree = renderer.create(<AppHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
