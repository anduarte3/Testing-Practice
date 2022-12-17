import caesar from '../codes/caesar';

// test('Wraps from z to a', () => {
//     expect(caesar('z', 2)).toEqual('c');
// });
  
// test('Works with different cases', () => {
//     expect(caesar('mooniiDev', 5)).toEqual('rttsnnIja');
// });
  
// test('Works with punctuation', () => {
//     expect(caesar('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
// });

test('normal test', () => {
    expect(caesar('hello world', 5)).toEqual('mjqqt btwqi');
});