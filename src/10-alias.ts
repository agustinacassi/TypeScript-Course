(() => {
  //Types
  type UserID = string | number | boolean;
  //Definir un tipo hace que la definición sea reutilizable y fácil de modificar con efecto a gran escala en el proyecto
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  //No podrá ser asignado cualquier valor sino aquel que esté en el conjunto
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //No sería incluido:
  //shirtSize = 'lsfdjsdfhsdfjh';

  function shirts(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  shirts(1111, 'L');

})();
