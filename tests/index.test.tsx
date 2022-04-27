import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import HomePage from '../pages/index';

it('renders homepage unchanged', () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
