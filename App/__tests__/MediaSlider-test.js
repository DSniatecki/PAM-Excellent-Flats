import React from 'react';
import renderer from 'react-test-renderer';
import MediaSlider from '../components/Ad/MediaSlider';

test('renders correctly', () => {
  const tree = renderer.create(<MediaSlider />).toJSON();
  expect(tree).toMatchSnapshot();
});
