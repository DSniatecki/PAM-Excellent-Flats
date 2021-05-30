import React from 'react';
import renderer from 'react-test-renderer';
import FlatsNotFound from '../components/Ad/FlatsNotFound';

test('renders correctly', () => {
  const tree = renderer.create(<FlatsNotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});
