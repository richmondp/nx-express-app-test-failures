import { lowercaseImport } from '@testorg/lowercase-import';

describe(`test with import`, () => {
  it('should convert to lowercase', () => {
    expect(lowercaseImport("ABC")).toEqual("abc")
  });
})
