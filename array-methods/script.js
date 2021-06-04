// if you eant to check if the array method mutates the original
// https://doesitmutate.xyz/
// map - it changes every element of an array

const numbers = [1, 2, 3, 4, 5];

// -> [2, 4, 6, 8, 10]

// function myOwnMap(arr, callback) {
//     const result = [];
//     for (let element of arr) {
//         const changed = callback(element)
//         result.push(changed);
//     }
//     return result;
// }

// const myOwnMappedArray = myOwnMap(numbers, function (el) {
//     return el * 3
// })
// console.log(myOwnMappedArray);

// function mutator(el) {
//     return el * 2 
// }

// const doubled = numbers.map(mutator);

const doubled = numbers.map(function (number) {
    return number * 2
});

console.log(doubled)
console.log(numbers)
// create an array of strings
// using map add an exclamation mark at the end of every string

const words = ['foo', 'bar', 'baz'];

const changedWords = words.map(function (word) {
    return '?' + word
})
// console.log(changedWords);

// create an array of numbers
// map over the array and add 10 to every number
const nums = [2, 4, 6, 10, 16];
const numsPlusTen = nums.map(function (num) {
    return num + 10
})
// console.log(numsPlusTen)







const students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72,
        final: 23
    }
];

// 2. use the students array and create a new array that contains 
// objects in this format : 
// { name: <name of the student, projects: <sum of the projects>}

const projectsSums = students.map(function (student) {
    // let final = 0;
    // if ('final' in student) {
    //     final = student.final;
    // }
    // console.log(final)
    return {
        name: student.name,
        projects: student.firstProject + student.secondProject + (student.final || 0)
    }
})
// console.log(projectsSums);

// 1. map over students and create an array containing only the names 
// ['Tony Parker', 'Marc Barchini', etc]

const onlyNames = students.map(function (student) {
    return student.name
});
// console.log(onlyNames)

// reduce - reducing (turning) an array into one value

const numbers2 = [2, 4, 6];

const sum = numbers2.reduce(function (accumulator, value) {
    console.log('accumulator is: ', accumulator);
    console.log('value is: ', value);
    return accumulator + value
}, 0)

// console.log(sum)
const names = ['foo', 'bar', 'baz'];

const sumNames = names.reduce(function (acc, val) {
    return acc + val.length
}, 0)
console.log(sumNames)

console.clear();

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
];

// use reduce to sum up all the ages in the array

const ages = people.reduce(function (acc, val) {
    console.log(val)
    console.log(acc)
    return acc + val.age
}, 0)
console.log(ages)

console.clear();

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacter: "Amazon",
    reviews:
        [
            {
                user: "Pavel Nedved",
                comments: "It was really usefull, strongly recommended",
                rate: 4
            },
            {
                user: "Alvaro Trezeguet",
                comments: "It lasted 2 days",
                rate: 1
            },
            {
                user: "David Recoba",
                comments: "Awesome",
                rate: 5
            },
            {
                user: "Jose Romero",
                comments: "Good value for money",
                rate: 4
            },
            {
                user: "Antonio Cano",
                comments: "It broked really fast",
                rate: 2
            },
        ]
}

// sum up all the rates of this product using reduce

console.log(product.reviews)
const ratesSum = product.reviews.reduce(function (sum, review) {
    return (sum + review.rate)
}, 0)

// const avg = ratesSum / product.reviews.length;

console.log(ratesSum);
console.clear();
// filter - iterates over the array and returns a new array 
// containing some of the elements that match the provided 
// condition

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evens = nums3.filter(function (num) {
    // if (num % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return num % 2 === 0
})

const largerThanThree = nums3.filter(function (num) {
    // if (num > 3) {
    //     return true
    // }
    // return false
    return num > 3
})
console.log(largerThanThree);

console.log(evens)


const places = [
    {
        title: "Awesome Suite 20' away from la Rambla",
        price: 200,
        type: "Private Room",
        pool: true,
        garage: false
    },
    {
        title: "Private apartment",
        price: 190,
        type: "Entire Place",
        pool: true,
        garage: true
    },
    {
        title: "Apartment with awesome views",
        price: 400,
        type: "Entire Place",
        pool: false,
        garage: false
    },
    {
        title: "Apartment in la Rambla",
        price: 150,
        type: "Private Room",
        pool: false,
        garage: true
    },
    {
        title: "Comfortable place in Barcelona´s center",
        price: 390,
        type: "Entire place",
        pool: true,
        garage: true
    }
];

// filter for all the places that have a pool - all the places with a pool should be filtered
// filter all with a price above 300

const pools = places.filter(function (place) {
    // if (place.pool) {
    //     return true
    // }
    // return false
    return place.pool
})

const priceAbove300 = places.filter(function (place) {
    if (place.price > 300) {
        return true
    }
    return false
})

console.log('above 300: ', priceAbove300)

console.log(pools)

console.clear();

function getTitlesOfPlacesAbove300(places) {
    const priceAbove300 = places.filter(function (place) {
        // if (place.price > 300) {
        //     return true
        // }
        // return false
        return place.price > 300
    })
    const titles = priceAbove300.map(function (place) {
        return place.title
    })
    return titles
}
const result = getTitlesOfPlacesAbove300(places);
console.log(result);

console.clear();

// reverse() - reverses an array
const nums4 = [1, 2, 3, 4, 5];
nums4.reverse();
console.log(nums4)

const str = 'hello world';
// change a string to an array - split()
const arr = str.split('');
arr.reverse();
// change an array to a string
const reversedString = arr.join('');

const inOneLine = str.split('').reverse().join('');
console.log(inOneLine);

const name = 'alice';
// change name to this: 'a*l*i*c*e'
const nameChanged = name.split('').join('*');
console.log(nameChanged);

// const str = 'hello world';
// how many times does a certain character appear in a string
const string = 'helolo worold';
const occurences = string.split('w').length - 1;
console.log(occurences);

console.clear();

// sort - sort an array 

const nums5 = [2, 55, 32, 12, 4];

// this sorts by the encoded characters -> not correct  
// const wronglySorted = nums5.sort();
// console.log(wronglySorted);

// this to make a copy to not mutate the original
// for an array like this (only containing numbers) nums5.slice()
// would be enough
const copy = JSON.parse(JSON.stringify(nums5));
const sorted = copy.sort(function (a, b) {
    // if (a < b) {
    //     return - 1
    // }
    // if (b < a) {
    //     return 1
    // }
    return a - b
})
console.log(sorted);

console.log('nums 5: ', nums5)

const reviews = [
    {
        name: 'foo',
        rate: 9
    },
    {
        name: 'bar',
        rate: 3
    },
    {
        name: 'baz',
        rate: 5
    }
]
// sort the reviews ascending by it's rate
const sortedReviews = reviews.sort(function (a, b) {
    // ascending
    return a.rate - b.rate
    // descending
    // return b.rate - a.rate
})

console.log(sortedReviews)