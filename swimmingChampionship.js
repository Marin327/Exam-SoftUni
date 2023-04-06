function swimmingChampionship(data) {
    let daysCount = Number(data.shift());
    let neededPoints = Number(data.shift());
    let swimmersCount = Number(data.shift());
    let hotelRoomPricePerSwimmer = Number(data.shift());
    let paticipationFeePerSwimmer = Number(data.shift());
    
    let totalExpenses = 0;
    let expensesForHotel = 0;
    let totalPoints = 0;
    let daylyPoints = 0;
 
    totalExpenses = paticipationFeePerSwimmer * swimmersCount;
    expensesForHotel = daysCount * hotelRoomPricePerSwimmer * swimmersCount;
    totalExpenses += expensesForHotel;
    for (let i = 0; i < data.length; i++) {
        let earnedPoints = Number(data[i]);
        if (i > 0) {
            totalPoints += earnedPoints + daylyPoints * 0.05;
            daylyPoints = 0;
        } else {
            totalPoints += earnedPoints;
        }
        daylyPoints += earnedPoints;
    }
    if (totalPoints >= neededPoints) {
        totalExpenses *= 0.75;
        console.log(`Money left to pay: ${totalExpenses.toFixed(2)} BGN.`);
        console.log('The championship was successful!');
    } else {
        totalExpenses *= 0.90;
        console.log(`Money left to pay: ${totalExpenses.toFixed(2)} BGN.`);
        console.log('The championship was not successful.');
    }
}
swimmingChampionship(["3",
    "400",
    "5",
    "70.6",
    "15.0",
    "100.6",
    "300.59",
    "250.9"
])
//
console.log("--------")
swimmingChampionship(["2",
"600",
"3",
"100.8",
"50.5",
"100.68",
"80.1"])
//

console.log("--------")
swimmingChampionship(["3",
"500",
"5",
"100.9",
"50.1",
"100.5",
"301.0",
"80.0"])