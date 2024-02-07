import { lowercase } from './lowercase';

describe('lowercase', () => {
  it('should work', () => {
    expect(lowercase("LOWERCASE")).toEqual('lowercase');
  });
});
