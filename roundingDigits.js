function roundingDigits(numbers){
    let num = numbers[0];
    let rounding = numbers[1];
 
    if (rounding > 15){
        rounding = 15;
    }
 
    let roundingNumber = Number(num.toFixed(rounding));
    console.log(roundingNumber);
 
}
roundingDigits([""])