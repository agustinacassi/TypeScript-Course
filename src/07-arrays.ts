(()=>{
  let prices = [132,233,3444];
  //prices.push("assas") //Error TS (string no cumple con la condición de string en la definición)
  let newPrices = [123,2323,343, "hola"]
  //por definición, este arreglo podrá tener number | string
  let mixed: (number | string | boolean)[] = ["hola", true]
  //podemos definir qué tipo de datos recibirá el arreglo
  mixed.push(true);
})()
