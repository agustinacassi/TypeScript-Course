(() => {
  let myProductName = 'Product 1';
  //Deduce el tipo automáticamente a string. Queda asignado de forma inferida el tipo de dato.

  let myProductPrice = 123;
  //Deduce el tipo automáticamente a number. Queda asignado de forma inferida el tipo de dato.

  //Si quisiera asignar un cambio de tipo, typescript arrojará una alerta.
  //Si quisiera utilizar un método propio del tipo de dato, typescript ayudará con sugerencias orientadas.

  const myProductStock = 1000;
  //Al declarar constantes, typescript dejará de deducir el tipo como number, y deducirá al valor exacto de la variable, en este caso 1000.
  //No permitirá reasignar valores a constantes.

  const myProductName2 = 'Product 2';
})();
