import reverseString from "./reverseString";

test('Reverses the given string', () => {
    expect(reverseString('berkay')).toBe('yakreb');
});

test('Reverses the given string with spaces', () => {
    expect(reverseString('string with spaces')).toBe('secaps htiw gnirts');
});

test('Reverses the given string with spaces and numbers', () => {
    expect(reverseString('string with spaces and numbers, 12345')).toBe('54321 ,srebmun dna secaps htiw gnirts');
});