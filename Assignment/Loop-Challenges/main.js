//odd num
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// divide by 3
for (let i = 100; i > 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// print the sequence
let sequence = "";
for (let i = 4; i >= -3; i -= 1.5) {
    sequence += i + " ";
}
console.log(sequence);

// sigmalet sum = 0;
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// factorial
let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);