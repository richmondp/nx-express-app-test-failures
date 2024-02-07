import { lowercaseImport } from './lowercase-import';

describe('lowercaseImport', () => {
  it('should work', () => {
    expect(lowercaseImport("LOWERCASE")).toEqual('lowercase');
  });
});
