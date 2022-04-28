import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import HomePage from '../src/pages/index';

it('renders homepage unchanged', () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
