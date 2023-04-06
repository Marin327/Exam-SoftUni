function solve(input) {
    let sum = 0;
    let arr = input.split(" ")
        .map(x => Number(x))

    arr.forEach(x => sum += x);

    let res = arr.filter(value => value > sum / arr.length)
        .sort((a, b) => b - a)
        .splice(0, 5);
    console.log(res.length > 0 ? res.join(" ") : "No");
}
solve('10 20 30 40 50')