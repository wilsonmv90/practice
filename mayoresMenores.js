const users = [
  {
    nombre: "Maria",
    edad: 30,
    direccion: {
      calle: "Calle 456",
      ciudad: "Barcelona",
      codigoPostal: "08001",
    },
    hobbies: ["jugar", "cocinar", "viajar"],
    amigosEnComunArray: [
      {
        nombre: "Juan",
        edad: 17,
        amigosEnComun: [
          { nombre: "sergio", edad: 20 },
          { nombre: "Catalina", edad: 8 },
        ],
      },
      {
        nombre: "Luis",
        edad: 35,
        amigosEnComun: [
          { nombre: "isaac", edad: 5 },
          { nombre: "Laura", edad: 27 },
        ],
      },
    ],
  },
  {
    nombre: "Pedro",
    edad: 35,
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
          { nombre: "deivis", edad: 45 },
          { nombre: "dina", edad: 16 },
        ],
      },
      {
        nombre: "Luis",
        edad: 27,
        amigosEnComun: [
          { nombre: "demi", edad: 25 },
          { nombre: "wilson", edad: 32 },
        ],
      },
    ],
  },
];

// --------------- solution 1--------------------\\
const reduceList = users.reduce((data, item) => {
  item.amigosEnComunArray.forEach((item) => 
    item.amigosEnComun.filter((item) => {
      if (item.edad < 18) {
        data.menores.push(item);
         }else{
           data.mayores.push(item);
         }
    }))
  return data;
}, {mayores:[],menores:[]});

console.log("reduceList", reduceList);

// --------------- solution 2--------------------\\ 
const result = users.reduce((data, item) => {
  item.amigosEnComunArray.forEach((item) => 
    item.amigosEnComun.filter((item) => 
      item && item.edad < 18 ? data.menores.push(item) : data.mayores.push(item)
    )
   )
  return data;
}, {mayores:[],menores:[]});

console.log("result", result);



/* 
  output mayores 
  { nombre: "sergio", edad: 20 },
  { nombre: "demi", edad: 25 },
  { nombre: "Laura", edad: 27 },
  { nombre: "wilson", edad: 32 },
  { nombre: "deivis", edad: 45 },

  output menores
  { nombre: "isaac", edad: 5 },
  { nombre: "Catalina", edad: 8 },
  { nombre: "dina", edad: 16 },
*/
