let almuerzos = [
    {principal: "arepa", postre: "helado" },
    {principal: "sushi", postre: "torta" },
    {principal: "tacos", postre: "helado" },
    {principal: "arepa", postre: "torta" },
    {principal: "arepa", postre: "churro" },
    {principal: "pizza", postre: "quesadilla" },
 ]
 
 
 //programacion imperativa
/*  
result = 0
 for (let i = 0; i < almuerzos.length; i++){
   if (almuerzos[i].principal === "arepa"){
     result++
   }
   console.log(almuerzos[i].principal)
 }
 console.log(result) 
*/
 
 const resultado = almuerzos.reduce((acum,item)=>{
  if(item.principal === "arepa"){
    return acum + 1
  }else{
    return acum
  }
 },0)
 console.log("cantidad de arepas :", resultado)

 const tools = [
    { id: 1, name: "martillo", amount: 5 },
    { id: 2, name: "pinza", amount: 3 },
    { id: 1, name: "martillo", amount: 2 },
    { id: 1, name: "martillo", amount: 1 },
    { id: 3, name: "bloque", amount: 1 },
  ];
  
  /* const totalTools = tools.reduce((acum, item) => acum + item.amount, 0);
  console.log("totalTools",totalTools);  */
  
  
  /* const filterHammer = tools.filter((item) => {
    return item.name === "martillo";
  });
  
  console.log(filterHammer); */
  
  const totalHammer  = tools
    .filter((item) => item.name === "martillo")
    .reduce((acum, item) => acum + item.amount, 0);
  console.log(totalHammer); 

 
 let numbers = [25, 48, 13, 83, 59];
 let maxNumber = numbers.reduce((max, current) => { 
     return max > current ? max : current; 
 });
 console.log(maxNumber);
 
 
 