import capitalize from '../codes/capitalize'

test('"test" should become "Test"', () => {
    expect(capitalize('i have a very cute dog')).toBe('I have a very cute dog');
});