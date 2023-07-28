const usuarios = [
  {
    nombre: "Maria",
    edad: 30,
    direccion: {
      calle: "Calle 456",
      ciudad: "Barcelona",
      codigoPostal: "08001",
    },
    hobbies: ["jugar", "cocinar", "viajar"],
    amigos: [
      { nombre: "Juan", edad: 17 },
      { nombre: "wilson", edad: 35 },
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
    hobbies: ["leer", "correr", "nado"],
    amigos: [
      { nombre: "Maria", edad: 40 },
      { nombre: "demi", edad: 27 },
    ],
  },
];

//return an array of objects with the name and age of those between 30 and 40 years old

// --------------- solution 1--------------------\\
const resultReduce = usuarios.reduce((data, user) => {
  user.amigos.map((i) => i.edad >= 30 && i.edad <= 40 && data.push(i));
  return data;
}, []);

console.log(resultReduce); 

// --------------- solution 2--------------------\\
/* const resultEdad = [];
usuarios.forEach((usuario) => {
  usuario.amigos.map((i) => i.edad >= 30 && i.edad <= 40 && resultEdad.push(i));
});

console.log("resultEdad", resultEdad); */

// --------------- solution 3--------------------\\
/* 
const filterEdad = usuarios.flatMap((item)=> {
  return item.amigos.filter((data)=>data.edad >30 && data.edad <= 40)
})
console.log('filterEdad', filterEdad)
*/

/* 
const result = usuarios
  .flatMap((usuario) => usuario.amigos)
  .filter((amigo) => amigo.edad >= 30 && amigo.edad <= 40)
console.log(result); 
*/

/* 
const amigosEdad = usuarios.flatMap(item =>item.amigos.filter(i => i.edad >= 30 && i.edad <=40));
console.log(amigosEdad); 
 */


// --------------- solution 4--------------------\\
const findResults = usuarios.map((item)=>{
  const result = item.amigos.find((data)=>data.edad < 30 )
  return result
  })
  
console.log('findResults', findResults)

  
const result = usuarios.map((date) => date.amigos.find((i) => i.edad > 30 && i.edad <= 40));
console.log("result", result); 














