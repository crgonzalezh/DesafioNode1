const fs = require('fs');

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  
  // Leer citas existentes
  let citas = [];
  if (fs.existsSync('citas.json')) {
    const data = fs.readFileSync('citas.json', 'utf-8');
    citas = JSON.parse(data);
  }

  // Agregar nueva cita y guardar en JSON
  citas.push(nuevaCita);
  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
  console.log('Cita registrada con éxito.');
};


const leer = () => {
  if (fs.existsSync('citas.json')) {
    const data = fs.readFileSync('citas.json', 'utf-8');
    const citas = JSON.parse(data);
    console.log('Citas registradas:', citas);
  } else {
    console.log('No hay citas registradas.');
  }
};

module.exports = { registrar, leer };
