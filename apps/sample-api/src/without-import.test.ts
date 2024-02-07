import { lowercase } from '@testorg/lowercase';

describe(`test without import`, () => {
  it('should convert to lowercase', () => {
    expect(lowercase("ABC")).toEqual("abc")
  });
})

