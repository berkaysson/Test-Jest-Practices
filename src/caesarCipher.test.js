import caesarCipher from "./caesarCipher";

test('Caesar cipher 1', () => {
    expect(caesarCipher('Hello World!', 1)).toBe('Ifmmp Xpsme!');
});

test('Caesar cipher 10 of upper case text', () => {
    expect(caesarCipher('HELLO WORLD!', 10)).toBe('ROVVY GYBVN!');
});

test('Caesar cipher 100', () => {
    expect(caesarCipher('Hello World!', 100)).toBe('Dahhk Sknhz!');
});

test('Caesar cipher -1', () => {
    expect(caesarCipher('Hello World!', -1)).toBe('Gdkkn Vnqkc!');
});

test('Caesar cipher 10 and numbers', () => {
    expect(caesarCipher('H1e3ll4o Wo5rld!', 10)).toBe('R1o3vv4y Gy5bvn!');
});