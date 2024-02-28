function Me(name, surname, age, grade) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.grade = grade;
}

const me = new Me("Nikolas", "Bobokhidze", 16, 11);


Me.prototype.changeGrade = function(newGrade) {
    this.grade = newGrade;
};


console.log("Original grade:", me.grade); 
me.changeGrade(12);
console.log("Updated grade:", me.grade);



