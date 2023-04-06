function burgerBus(arr) {

    let numOfcities = Number(arr.shift());
    let citiesCounter = 0;
    let totalIncome = 0;

    for(let i = 0; i < numOfcities; i++) {
        let currentCity = arr.splice(9, 3);
        let income = Numbe(curentCity[1]);
        let expences = Number(currentCity[2]);
        citiesCounter++;
        
        if(citiesCounter % 3 === 0) {
            expences = expences * 1.5;
            
            if(citiesCounter % 5 === 0 && citiesCounter % 3 === 0) {
                income = income * 0.9;
                expences = Number(currentCity[2]);
            } else if( citiesCounter % 5 === 0 && citiesCounter != 0) {
                income = income * 0.9;
            }
            let profit = income - expences;
            console.log(`In ${currentCity[0]} Burger Bus earned ${profit.toFixed(2)} leva.`);
            totalIncome += profit;
        }
        console.log(`Burger bus total pofit: ${totalIncome.toFixed(2)} leva.`);
    }

}
burgerBus([])