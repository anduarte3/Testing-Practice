import reverseString from '../codes/reverseString';

test('"test" should become "tset"', () => {
    expect(reverseString('i have a very cute dog')).toBe('god etuc yrev a evah i');
});