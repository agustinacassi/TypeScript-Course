//Definición de scope con función anónima autoejecutada
(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log('product', productPrice)

  let customerAge: number = 28;
  //customerAge = customerAge + "1" Arrojaría error Num + Str;
  customerAge = customerAge + 1;

  //En caso de definiciones sin asignación de valores, especificar el tipo.
  let productInStock: number;
  console.log('productInStock', productInStock)
  if(productStock > 10){
    console.log('is greater')
  }

  let discount = parseInt('123');
  //Automáticamente lo asigna a tipo number, a pesar de parsear un string
  console.log('discount', discount)

})
