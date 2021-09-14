
var y = prompt('Введите число');
if (y >= 0) {
    console.log('число положительное')
} else {
    console.log('число отрицательное')
}


var x = 0;
var arr = [];
for (var i = 0; i < 10; i++) {
    x += 5;
    arr.push(x)
}

x = 0;
var sum = 0;
for (i = 0; i < 10; i++) {
    sum += arr[i];
}
console.log(sum);

var numbers = [ 254, 115, 78, 25, 91, 45, 37 ];
var newArrNumbers = [];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        newArrNumbers.push(numbers[i])
    }
}
console.log(newArrNumbers);

numbers = [ 254, 115, 78, 25, 91, 45, 37 ];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        console.log(numbers[i])
    }
}
