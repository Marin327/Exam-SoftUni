function cookingMasterclass(input) {

    let maping = input.map(x => Number(x));

    let budget = maping.shift();
    let students = maping.shift();
    let priceFlour = maping.shift();
    let priceEgg = maping.shift();
    let priceApron = maping.shift();

    let totalFlour = 0;
    let totalEgg = 0;
    let totalPrice = 0;
    let studentFlour = students;

    for (let i = 1; i <= students; i++) {
        if (i % 5 === 0) {
            studentFlour--;
        } else {
            totalFlour = totalFlour;
        }
        totalFlour = studentFlour * priceFlour;
    }

    let totalApron = Math.ceil((students * 0.20) + students) * priceApron;
    totalEgg = priceEgg * 10 * students;
    totalPrice = totalFlour + totalApron + totalEgg;

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
    } else if (totalPrice > budget) {
        let neededPrice = totalPrice - budget;
        console.log(`${neededPrice.toFixed(2)}`);
    }

}

cookingMasterclass([50, 2, 1.0, 0.10, 10.0])

console.log("------------")

cookingMasterclass([100, 25, 4.0, 1.0, 6.0])

console.log("------------")

cookingMasterclass([946, 20, 12.05, 0.42, 27.89])