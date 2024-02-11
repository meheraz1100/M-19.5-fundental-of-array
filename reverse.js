//              [9, 8, 7, 6, 5, 4, 3, 2, 1]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
// console.log(numbers);

// const reverse = numbers.reverse();

// console.log(reverse);


const rev_numbers = [];

for(const num of numbers){
    // console.log(num);
    rev_numbers.unshift(num);
}

// console.log(rev_numbers);


const reversedNumbers = [];
for(let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversedNumbers.unshift(num);
}

// reverse side
// decreasing the number
const rev_reversedNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    rev_reversedNumbers.push(num);
}
console.log(rev_reversedNumbers);