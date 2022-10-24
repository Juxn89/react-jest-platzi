const CITIES = ['Ciudad de México', 'Lima', 'Buenos Aires', 'Managua'];
const randomString = () => {
    const string = CITIES[Math.floor(Math.random() * CITIES.length)]
    return string;
}

module.exports = randomString;