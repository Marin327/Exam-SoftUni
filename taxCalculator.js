function taxCalculator(arr) {

  arr = arr.toString();
  let cars = arr.split(">>");
  let taxOfficeRevenue = 0;

  for(let i = 0; i < cars.length; i++) {
    let command = cars[i].split(" ");
    let carType = command[0];
    let yearsTax = Number(command[1]);
    let kilometers = Number(command[2]);
    let tax = 0;
    let decline = 0;
    let taxIncrease = 0;
    let taxContained = 0; 
    let total = 0;

    if( carType === "family") {
      tax = 50;
      decline = 5;
      taxIncrease = 12;

      taxContained = Math.floor(kilometers / 3000);

      total = (taxContained * taxIncrease) + (tax - yearsTax * decline);

      console.log(`A family car will pay ${total.toFixed(2)} euros in taxes.`);

    } else if(carType === "heavyDuty") {
tax = 80;
decline = 8;
taxIncrease = 14;

taxContained = Math.floor(kilometers / 9000);

total = (taxContained * taxIncrease) + (tax - yearsTax * decline);

console.log(`A heavyDuty car will play ${total.toFixed(2)} euros in taxes.`);
  } else if(carType === "sports"){
    tax = 100;
    decline = 9;
    taxIncrease = 18;

    taxContained = Math.floor(kilometers / 2000);
    
    total = (taxContained * taxIncrease) + (tax - yearsTax * decline);

    console.log(`A sports car will play ${total.toFixed(2)} euros in taxes.`);
  } else {
    console.log(`Invalid car type.`);
  }
  taxOfficeRevenue += total;
  }
  console.log(`The National Revenue Agency will collect ${taxOfficeRevenue.toFixed(2)} euros in taxes.`);
}

taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])