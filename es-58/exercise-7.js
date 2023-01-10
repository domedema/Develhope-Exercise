class Person {
  constructor (firstName,lastName,age)
  {this.firstName = firstName;
    this.lastName = lastName;
    this.age === Number; 

  }
  set age(NewVal){
    if(NewVal < 1){
      this.age = 1
    }
    else if (NewVal > 120){
      this.age = 120
    }
    else (this.age = NewVal)
  }
  get age(){
    return this.age
  }
  get fullName(){
    return this.fullName
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);