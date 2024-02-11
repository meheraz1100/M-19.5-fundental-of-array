const persons = ['rakib', 'nokib', 'sakib', 'pakib', 'akib', 'mukib', 'Anis'];
const sortedPersons = persons.sort();
console.log(sortedPersons);


// sort()    --->>
// const numbers = [8, 4, 3, 12, 6, 38, 5 , 6, 3];
/**
 * Ascending ---->> Smaller to larger   
 * Descending ---->> larger to smaller  
 * Sorts an array in place. This method mutates the array and returns a reference to the same array.
 * 
Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
[11,2,22,1].sort((a, b) => a - b)
*/

const numbers = [8, 4, 3, 12, 6, 38, 5 , 6, 3, 1];
// const numbers_asc = numbers.sort(); not working properly
const numbers_asc = [...numbers].sort(function(a, b) {return a - b});   // sorting order is a - z
const numbers_dsc = [...numbers].sort(function(a, b) {return b - a});   // sorting order is z - a
// const dsc_reverse = numbers_dsc.reverse();

console.log(numbers_asc);
console.log(numbers_dsc);

/**
 * tasks 
 * https://github.com/ProgrammingHero1/array-looping-tasks
 */