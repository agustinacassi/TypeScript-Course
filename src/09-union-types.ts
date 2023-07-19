(()=>{
  //Union types: permiten definir más de un tipo de dato asignable a una variable.
  let userId: string | number;
  userId = 1212;
  userId = 'asasas';

  //Puedo definir los tipos en parámetros de funciones
  function greetings(myText: string | number){
    if(typeof myText === "string"){
      //Typescript me dará opciones de métodos orientados al resultado del if
      console.log(`String ${myText.toLowerCase()}`)
    }else{
      console.log(`Number ${myText.toFixed(1)}`)
    }
  }
  greetings('asas')
  greetings(1212)
})();
