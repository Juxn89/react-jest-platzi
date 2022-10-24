const text = 'Hola Mundo';
const fruits = ['manzana', 'melón', 'banana'];
const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''))
}
const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str) return reject(Error(`Error...${str}`))

        resolve(str.split('').reverse().join(''))
    });
}

afterEach(() => console.log('Despúes de cada prueba'));
afterAll(() => console.log('Despúes de todas pruebas'));

beforeEach(() => console.log('Antes de cada prueba...'));
beforeAll(() => console.log('Antes de todas pruebas...'));

test('Debe de contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

test('¿Tenemos una banana?', () => {
    expect(fruits).toContain('banana');
});

test('¿Es mayor que...?', () => {
    expect(10).toBeGreaterThan(9);
});

test('¿Es verdadero?', () => {
    expect(true).toBeTruthy();
});

test('Probar callback', () => {
    const normalText = 'Juan';
    const reverseText = 'nauJ';

    reverseString(normalText, (str) => {
        expect(str).toBe(reverseText);
    })
})

test('Probar una promesa', () => {
    return reverseString2('Juan')
        .then(string => expect(string).toBe('nauJ'))
})

test('Probar una async/await', async () => {
    const result = await reverseString2('Juan');
    expect(result).toBe('nauJ');
})