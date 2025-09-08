let people = [{name: "Sanjeev", age: 23, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Samika", age: 21, gender: "female", skills: "Developer", birthYear: 2000},
                {name: "Suman", age: 22, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Aaryan", age: 28, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Bibek", age: 32, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Aayush", age: 21, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Roshan", age: 33, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Nishan", age: 27, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Sabin", age: 25, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Yakendra", age: 26, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Prince", age: 37, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Bikki", age: 23, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Chandan", age: 25, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Rishi", age: 30, gender: "male", skills: "Developer", birthYear: 2000},
                {name: "Richa", age: 33, gender: "female", skills: "Developer", birthYear: 2000},
               ];

// Average age of all people               
let totalAge = people.reduce((sum, person) => sum + person.age, 0);
let avgAge = totalAge / people.length;
console.log("Average Age of All People:", avgAge);

// Average age by gender
let males = people.filter(person => person.gender === "male");
let females = people.filter(person => person.gender === "female");

let avgMaleAge = males.reduce((sum, person) => sum + person.age, 0) / males.length;
let avgFemaleAge = females.reduce((sum, person) => sum + person.age, 0) / females.length;

console.log("Average Male Age:", avgMaleAge);
console.log("Average Female Age:", avgFemaleAge);

// People older than 25
let olderThan25 = people.filter(person => person.age > 25);
console.log("People Older Than 25:", olderThan25);

//if a person is Gen Z (born between 1997 and 2012)
function isGenZ(person) {
    let currentYear = new Date().getFullYear(); // using Date object as hint
    return person.birthYear >= 1997 && person.birthYear <= 2012;
}

let genZPeople = people.filter(isGenZ);
console.log("Gen Z People:", genZPeople);
