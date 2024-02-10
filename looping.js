/**
 * looping technique
 * for loop 
 * while loop
 * do while ---> ignore
 * for of -----> array ke loop korar jonno
 * for in -----> object ke loop korar jonno
 */


const friends = ['Elon', 'Bill', 'Mark', 'Waren'];


// using for of
for(const friend of friends){
    // console.log(friend);
}

// using for loop
for (let i = 0; i < friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}


const numbers = [123,14,23,54,245,35,23,54,4,646]

for(let i = 0; i < numbers.length; i++){
//    console.log(numbers[i]);
}


let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}
while(i < numbers.length){
    // console.log(numbers[i]);
    i++;
}

