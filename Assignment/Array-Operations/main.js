// Accessing element
let colors = ['red', 'blue', 'green', 'yellow', 'purple']
console.log('the first element is ' + colors[0] + ' and the last element is ' + colors[4]);
console.log('element in the second position is' + colors[1]);
colors.splice(2, 0, 'orange')
console.log(colors);

// traversing an array
let number = [10, 20, 30, 40, 50]
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
for (let i = number.length - 1; i >= 0; i--) {
    console.log(number[i]);
}

// searching in an array
let numbers = [5, 10, 15, 20, 25]
if (numbers.includes(25)) {
    console.log('found at position of ' + numbers.indexOf(25));
} else {
    console.log('not found');

}

// sorting an array
let scores = [50, 20, 70, 10, 40]
console.log(scores.sort((a, b) => a - b));
console.log(scores.sort((a, b) => b - a));
let names = ['Shatha', 'Sara', 'Lina', 'Sami', 'Dalia']
console.log(names.sort());


// Inserting element
let animals = ['dogs', 'cat', 'rabbit']
animals.push('elephant')
animals.unshift('lion')
animals.splice(2, 0, 'tiger')
console.log(animals);

// deleting element
let fruits = ['apple', 'banana', 'cherry', 'date']
fruits.shift()
fruits.pop()
fruits.splice(0, 1)
console.log(fruits);

// combining array
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
console.log(array1.concat(array2));

// splitting an array
let items = ['a', 'b', 'c', 'd', 'e']
let first = items.splice(0, 3)
let second = items.splice(0, 2)

console.log(first);
console.log(second);


// filtering element
let num = [1, 5, 10, 15, 20, 25, 30]
let newarr = []
for (let i = 0; i < num.length; i++) {
    if (num[i] > 15) {
        newarr.push(num[i])
    }
}
console.log(newarr);

//advanced challenge
function removeDuplicate(arr) {
    let newArray = []
    for (let i = 0; i <= arr.length - 1; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    console.log(newArray);
}
removeDuplicate([1, 2, 2, 1, 4, 5, 8, 8])

// bonus
function merge(arr1, arr2) {
    let merged = arr1.concat(arr2)
    for (let i = 0; i < merged.length; i++) {
        for (let j = i + 1; j < merged.length; j++) {
            if (merged[i] > merged[j]) {
                let temp = merged[i]
                merged[i] = merged[j]
                merged[j] = temp
            }
        }
    }

    console.log(merged);

}
merge([3, 2, 1], [5, 4, 6])




