// Convert Boolean 
const valores = [0, 1, '', 'abc', null, undefined];
const convertBoolean = value => Boolean(value);

const Booleanos = valores.map(convertBoolean);

console.log(Booleanos);
