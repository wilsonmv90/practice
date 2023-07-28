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
          { nombre: "sergio", edad: 25 },
          { nombre: "Catalina", edad: 32 },
        ],
      },
      {
        nombre: "Luis",
        edad: 35,
        amigosEnComun: [
          { nombre: "isaac", edad: 29 },
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
          { nombre: "james", edad: 19 },
          { nombre: "deivis", edad: 37 },
        ],
      },
      {
        nombre: "Luis",
        edad: 27,
        amigosEnComun: [
          { nombre: "demi", edad: 30 },
          { nombre: "Carlos", edad: 25 },
        ],
      },
    ],
  },
];

// --------------- solution 1--------------------\\
//note : friends with the letter starting with c
const result = users.flatMap((item) =>
  item.amigosEnComunArray.flatMap((date) =>
    date.amigosEnComun.filter((value) => {
      if (value.nombre.split("")[0] === "C") {
        return value;
      }
    })
  )
);
console.log("result", result); 


// --------------- solution 2--------------------\\
//note : friends with the letter starting with c and under 30 years of age
const filterAmigos = [];

const results = users.forEach((item) =>
  item.amigosEnComunArray.forEach((data) =>
    data.amigosEnComun.filter((value) => {
      if(value.nombre.split("")[0]==="C" && value.edad < 30) {
        filterAmigos.push(value);
      }
    })
  )
);

console.log("filterAmigos", filterAmigos); 

// --------------- solution 3--------------------\\
const filterResults = users.flatMap((user) =>
  user.amigosEnComunArray.flatMap((amigo) =>
    amigo.amigosEnComun.filter((value) => value.nombre.startsWith("C"))
  )
);
console.log(filterResults);

 


/* const word = "caroline";

function wordWithC() {
  const value = word.split("")[0];
  if (value === "c") {
    console.log("oh men", word);
  } else console.log("negative bro", word);
}

wordWithC(); */
