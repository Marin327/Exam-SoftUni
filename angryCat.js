function angryCat(priceRating, entryPoint, item) {

    let left = 0;
    let right = 0;

for(let i = 0; i < entryPoint; i++) {

    let currItem = priceRating[i];
    if(item === "cheap") {
       if(currItem < priceRating[entryPoint]) {
        left += currItem;
       }
    } else {
        if(currItem >= priceRating[entryPoint]) {
            left += currItem;
        }
    }
}
for(let i = entryPoint + 1; i < priceRating.length; i++) {
    let currItem = priceRating[i];
    if(item == "cheap") {
        if(currItem < priceRating[entryPoint]) {
            right += currItem;
        }
    } else {
        if(currItem >= priceRating[entryPoint]) {
            right += currItem;
        }
    }
}
if(left === right || left > right) {
    console.log(`Left - ${left}`);
}else {
    console.log(`Right - ${right}`);
  }
}
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
console.log("----------------")
angryCat([1, 5, 1], 1, "cheap");
console.log("----------------")
angryCat([-2, 2, 1, 5, 9, 3, 2 -2, 1 -1, -3, 3], 7, "expensive");