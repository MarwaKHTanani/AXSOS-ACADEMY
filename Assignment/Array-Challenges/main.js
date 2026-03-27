// always hungry

function alwaysHungry(arr) {
    if (!arr.includes("food")) {
        console.log("I'm hungry");
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
        }
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// high pass filter

function highPass(arr, cutoff) {
    var filteredArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5));

// better than average
function betterThanAverage(arr) {
    var sum = 0
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    var avg = sum / arr.length
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++
        }
    }
    return count
}
console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9]));

// array reverse

function reverse(arr){
    var newArr = []
    for(var i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverse(["a", "b", "c", "d", "e"]));

// fibonacci array

function fibonacci(n){
    var arr=[0,1]
    for (let i = 0; i < n-2; i++) {
        arr.push(arr[i]+arr[i+1])
    }
    return arr

}
console.log(fibonacci(10));
