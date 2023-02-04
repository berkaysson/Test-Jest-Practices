import capitalize from "./capitalize";

test('Capitalizes first charecter of a string', () => {
    expect(capitalize('berkay')).toBe('Berkay');
});

test('Capitalizes first charecter of a string', () => {
    expect(capitalize('Berkay')).toBe('Berkay');
});

test('Capitalizes first charecter of a string', () => {
    expect(capitalize('BERKAY')).toBe('BERKAY');
});

test('Capitalizes first charecter of a string', () => {
    expect(capitalize('1BERKAY')).toBe('1BERKAY');
});

test('Capitalizes first charecter of a string', () => {
    expect(capitalize('#>$$#5')).toBe('#>$$#5');
});