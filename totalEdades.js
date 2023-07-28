const users = [
  {
    nombre: "lucas",
    edad: 15,
    direccion: {
      calle: "Calle 456",
      ciudad: "Barcelona",
      codigoPostal: "08001",
    },
    hobbies: ["jugar", "cocinar", "viajar"],
    amigosEnComunArray: [
      {
        nombre: "Juan",
        edad: 8,
        amigosEnComun: [
          { nombre: "sergio", edad: 12 },
          { nombre: "Catalina", edad: 32 },
        ],
      },
      {
        nombre: "yeison",
        edad: 67,
        amigosEnComun: [
          { nombre: "isaac", edad: 5 },
          { nombre: "Laura", edad: 27 },
        ],
      },
    ],
  },
  {
    nombre: "wilson",
    edad: 32,
    direccion: {
      calle: "Calle 789",
      ciudad: "Valencia",
      codigoPostal: "46001",
    },
    hobbies: ["leer", "correr", "nadar"],
    amigosEnComunArray: [
      {
        nombre: "Maria",
        edad: 40,
        amigosEnComun: [
          { nombre: "james", edad: 11 },
          { nombre: "deivis", edad: 37 },
        ],
      },
      {
        nombre: "santiago",
        edad: 14,
        amigosEnComun: [
          { nombre: "demi", edad: 30 },
          { nombre: "Carlos", edad: 17 },
        ],
      },
    ],
  },
];

 const results = users.reduce((data, item) => {
    const { nombre, edad } = item;
    const obj = { nombre, edad };

    if (edad < 18) {
      data.menores.push(obj);
    } else {
      data.mayores.push(obj);
    }

    item.amigosEnComunArray.forEach((value) => {
      if (value.edad < 18) {
        data.menores.push(obj);
      } else {
        data.mayores.push(obj);
      }

      value.amigosEnComun.forEach((amigo) => {
        if (amigo.edad < 18) {
          data.menores.push(amigo);
        } else {
          data.mayores.push(amigo);
        }
      });
    });

    return data;
  },
  { menores: [], mayores: [] }
);
console.log("results", results); 


// Output mayores
/*
{ nombre: "Catalina", edad: 32 },
{ nombre: "yeison", edad:  }67,falta
{ nombre: "Laura", edad: 27 },
{ nombre: "Maria",edad: 40},falta
{ nombre: "deivis", edad: 37 },
{ nombre: "demi", edad: 30 },
// Output menores
   { nombre: "sergio", edad: 12 },
   { nombre: "Juan", edad: 8},falta
   { nombre: "santiago",edad: 14},falta
   { nombre: "isaac", edad: 5 },
   { nombre: "james", edad: 11 },
   { nombre: "Carlos", edad: 17 },
*/

