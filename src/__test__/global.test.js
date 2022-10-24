const text = 'Hola Mundo';

test('Debe de contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});