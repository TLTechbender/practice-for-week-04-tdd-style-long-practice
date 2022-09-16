class Person {
  // Your code here
constructor(name,age){

    this.name = name;
	this.age= age;

}

static greetAll(array){
array.forEach(el=>{

if (!(el instanceof Person)){
throw new TypeError('all elements must be an instance of the Person class');

}
});

    const greetings = array.map(el=> el.sayHello());
	return greetings;
}


sayHello(){
return `Hello ${this.name}!`
}

visit(otherPerson){

return `${this.name} visited ${otherPerson.name}`
}

  switchVisit(otherPerson){
   return otherPerson.visit(this);
  }

update(object){
if(typeof object != 'object' || object ===null){
   throw new TypeError('argument must be an object');
} else if(!object.name || !object.age){
   throw new TypeError('object must have a name and age property');
 }
   
	this.name=object.name;
	this.age = object.age;
}

tryUpdate(object){

	try{
	this.update(object);
        return true;

	}catch(error){
         return false;
	}

	}

}


module.exports = Person;
