const { registrar, leer } = require('./operaciones');

const [,, operacion, nombre, edad, animal, color, enfermedad] = process.argv;

if (operacion === 'registrar') {
  if (nombre && edad && animal && color && enfermedad) {
    registrar(nombre, edad, animal, color, enfermedad);
  } else {
    console.log('Por favor, proporciona todos los datos: nombre, edad, animal, color, enfermedad.');
  }
} else if (operacion === 'leer') {
  leer();
} else {
  console.log('Comando no reconocido. Usa "registrar" para registrar una cita o "leer" para ver las citas.');
}
