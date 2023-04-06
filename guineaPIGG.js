function solve(input) {
    //1.read input;
let foodKg = Number(input.shift());
let hayKg = Number(input.shift());
let coverKg = Number(input.shift());
let weightKg = Number(input.shift());
let hasGoToStore = false;
//1.5. iterate over 30 days;

for(let i = 1; i <= 30; i++) {
    //2. Modify food anount;
    foodKg = foodKg - 0.3;
    //3.Modify hay every 2nd day;
    if(i % 2 === 0) {
        hayKg -= foodKg * 0.05;;
    }
    //4.modify cover every 3nd day;
    if(i % 3 === 0) {
        coverKg -= weightKg / 3;
    }
   if(foodKg - 0 < 1e-3 || hayKg - 0 < 1e-3 || coverKg - 0 < 1e-3) {
 hasGoToStore = true;
 break;
   }
}
return hasGoToStore
? `Merry must go to the pet store!`
: `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`;
}
console.log(solve([10,
    5,
    5.2,
    1]));