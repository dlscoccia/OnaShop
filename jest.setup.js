// import Adapter from 'enzyme-adapter-react-16';
import { loadEnvConfig } from '@next/env';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

const projectDir = process.cwd();
loadEnvConfig(projectDir, true, {
  info: () => {},
  error: () => {},
});
configure({ adapter: new Adapter() });

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock(
  'next/link',
  () =>
    ({ children: Link }) =>
      Link
);
