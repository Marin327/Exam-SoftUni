function solve(arr) {
    let studentsCount = Number(arr.shift());
    let allLectures = Number(arr.shift());
    let initialBonus = Number(arr.shift());
    let maxAtt = 0;
    let maxBonus = 0;
    for (let i = 0; i < studentsCount; i++) {
        let attendances = arr[i];
        let bonus = (attendances / allLectures) * (5 + initialBonus);
        if (bonus >= maxBonus) {
            maxBonus = bonus;
            maxAtt = attendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAtt} lectures.`);
}

 
solve(5,
    25,
    30,
    12,
    19,
    24,
    16,
    20)