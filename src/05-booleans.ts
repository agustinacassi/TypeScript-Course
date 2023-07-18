(() => {
  let isEnabled = true;
  isEnabled = false;
  let isNew: boolean = false;
  console.log(isNew);
  isNew = true;

  const random = Math.random();
  console.log("random", random);
  isNew = random >= 0.5 ? true : false //chequea también en el caso de "true" y "false"
  console.log("isNew", isNew);

  const myBoolean: boolean = true;

})();
