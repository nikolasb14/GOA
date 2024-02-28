const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  const personName = person.name;
console.log(`Person's name: ${personName}`);

person.age = 35; // New age value

person.country = "United States";

person.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
  };
  
  // Call the greet method
  person.greet();

  
  const person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const person2 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Compare using === operator
  const areEqual = person1 === person2;
  console.log(`Are the objects equal? ${areEqual}`);

  
  const school = {
    name: "ABC School",
    students: [
      { name: "Alice", age: 12 },
      { name: "Bob", age: 11 },
      { name: "Charlie", age: 13 }
    ]
  };
  
  // Access a student's name and age
  const studentName = school.students[1].name;
  const studentAge = school.students[1].age;
  console.log(`Student: ${studentName}, Age: ${studentAge}`);

  
  

