// let numbers: number[] = [1,2,3,4];
// let personInfo: [string, number] = ["John Doe", 30];

// console.log(numbers, personInfo);

// interface Person {
//     name: string;
//     age: number;
// }

// let user: Person = {name: "Alice", age: 25};

// console.log(user.name);

// let person: {name: string; age: number} = {name: "John", age: 30};

// console.log(person.name);

// let a: number = 5;
// let b: number = a;


// a = 10;

// console.log(b);

// interface Cat {
//     meow() : void;
// }

// interface Dog {
//     bark() : void;
// }

// function isCat(animal : Cat | Dog) : animal is Cat {
//     return "meow" in animal;
// }

// let pet: Cat | Dog = {
//     meow: () => {
//         console.log("Meow!");
//     },
//     bark: () => {
//         console.log("Woof!");
//     }
// }

// if (isCat(pet)) {
//     pet.meow();
// } else {
//     pet.bark();
// }


// interface Trainee {
//     name: string;
//     class: string;
// }

// interface Developer {
//     name: string;
//     codingStack: string;
// }

// const isTrainee = (person: Trainee | Developer): person is Trainee => {
//     return 'class' in person;
// }

// const trainee: Trainee = { name: "Alice", class: "Math" };
// const developer: Developer = { name: "Bob", codingStack: "JavaScript" };

// const checkPerson = (person: Trainee | Developer) => {
//     if (isTrainee(person)) {

//     }
// }

