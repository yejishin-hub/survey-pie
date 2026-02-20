import { atom } from 'recoil';

const testState = atom({
  key: 'testState',
  default: ['a', 'b', 'c', 'd', 'e'],
});

export default testState;
