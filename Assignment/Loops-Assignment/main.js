// 1-print number
for (var i = 1; i <= 10; i++) {
    console.log(i);

}
// 2-reverse number
for (var i = 10; i >= 1; i--) {
    console.log(i);
}

// 3-even number
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);

    }
}

// 4-odd number
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//5-sum of number
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
