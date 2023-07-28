let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 },
];

const productos = prods.filter((i) => i.precio >= 5 && i.precio < 10);
console.log("productos", productos);

const people = [
  { name: "Adam", profession: "Engineer", company: "Google" },
  { name: "Sam", profession: "Manager", company: "Amazon" },
  { name: "Gerogia", profession: "Designer", company: "Netflix" },
  { name: "Kate", profession: "Engineer", company: "Microscoft" },
  { name: "James", profession: "Sales", company: "Amazon" },
];

const resultado = people.filter((item) => {
  if (item.company === "Amazon") return item;
});
console.log("resultado", resultado);
