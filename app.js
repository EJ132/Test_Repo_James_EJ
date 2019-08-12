'use strict';

function getYearOfBirth(age){
  let birthyear;

  if (age < 0){
    try {
      throw new Error('Age can not be negative');
    } catch (e){
      console.log(e.message);
    }
  }

  birthyear = 2018 - age;
  return birthyear;
}

function createGreeting(name, age){

  try {
    if (name.length === 0) throw new Error('Name not inserted');
    if (age === undefined) throw new Error('Number not inserted');
    if (typeof age !== 'number') throw new Error('Not a valid age');
    if (typeof name !== 'string') throw new Error('Not a valid name');
  } catch (e) {
    console.log(e.message);
  }

  /*

  if (name.length === 0 || name !== typeof name){
    throw new Error('please insert a name');
  } else if (age.length === 0 || age !== typeof age){
    throw new Error('please insert an age');
  }
  */
    
  const yob = getYearOfBirth(age);
  const greet = `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}`;
  return greet;
}

try {
  let greeting1 = createGreeting('EJ', 18);
} catch (e){
  console.error(e.message);
}

let greeting1 = createGreeting('EJ', 18);
console.log(greeting1);