(() => {
  //Con la palabra reservada any, puedo asignar cualquier valor a la variable, pero es poco recomendado su uso en general ya que deja sin efecto el análisis de código estático.
  //Puede ser utilizado para migraciones de proyectos en etapas iniciales pero no con fines de mantenerlo en producción.

  let myDynamicVar: any;
  myDynamicVar = 110;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  //El tipo de dato any no permite obtener ayudas de métodos al codear. Al castear, me permitirá acceder a métodos orientados.
  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLocaleLowerCase();
  console.log(rta);

  //<number> "trátalo | cast como number" Será forzosamente tratada como un number
  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2)
})();
