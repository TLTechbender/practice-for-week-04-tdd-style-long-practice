// Your code here

const chai = require("chai");
const expect = chai.expect;

const spies =require('chai-spies');
const Person = require("../problems/person.js");


describe("Person class", ()=>{

let person1;
	let person2;


	beforeEach(()=>{
	person1= new Person("voila", 7);
		person2 = new Person("emtau", 9);
	});

        


	describe("Person constuctor function", ()=>{
         it('should have a "Person" property function', ()=>{
         expect(person1).to.exist;
		 expect(person2).to.exist;

	 

	});


        it("should set the 'name' property when a new name is created", ()=>{
         expect(person1.name).to.equal("voila");
		expect(person2.name).to.equal("emtau");

	});
	
          it('should set the "age" property when a new age is created', ()=>{

               expect(person1.age).to.equal(7);
		  expect(person2.age).to.equal(9);
	  });

	});

     describe("sayHello() function", ()=>{
      it("should return a string of the 'Person' instance name and a greeting message", ()=>{

        const greeted1= person1.sayHello();
	      expect(greeted1).to.equal("Hello voila!");
      });

     });
      
	describe("visit(otherPerson)", ()=>{
    it("should return a string stating that this nstance visited the passed-in person instance", ()=>{
           const didVisit1 = person1.visit(person2);

	    expect(didVisit1).to.equal("voila visited emtau");

    });
    });

  context("switchVisit(otherPerson)", ()=>{
   it("should invoke the visit function of the parmeter(otherPerson), passing in the current instanace as the argument", ()=>{

   const visited = person1.switchVisit(person2);
	   expect(visited).to.equal("emtau visited voila");

   });
  
	  it("calls the visit method on the passed in instance", ()=>{
        const visitor = chai.spy.on(person2, "visit");
		  person1.switchVisit(person2);
		  expect(visitor).to.have.been.called.once;

	  });
   });
   
	context("update(object)", ()=>{
         
         describe("When argument is a valid object", ()=>{

         // I got helped round these parts
          
		 it("updates instance properties with object properties", ()=>{

               const newDetails = {name: 'fella', age:37};

	       person1.update(newDetails);
			 expect(person1.name).to.equal("fella");
			 expect(person1.age).to.equal(37);
                
		 });


          it("throws a TypeError when the object doesn't have name and age properties", ()=>{

          const book= {title:"messithegoat", author:"pabloIbile"};
		  expect(()=> person1.update(book)).to.throw(TypeError, 'name', "age");


	  });

	 });
          


	describe("when argument is not a valid object",()=>{
         it('throws a TypeError', ()=>{
         const notAFella = 37;

         expect(()=> person1.update(notAFella)).to.throw(TypeError, "argument");


	 });

	})	
      

	}); 

    context("tryUpdate", ()=>{
     
	    describe("when update is successful", ()=>{

        let newDetails;
        let pass;

            beforeEach(()=>{
            newDetails = {name:"fella", age:37};
	pass = person1.tryUpdate(newDetails);
	    });
	    
           it('updates instance properties with object properties', ()=>{
           expect(person1.name).to.equal("fella");
		   expect(person1.age).to.equal(37);
	   });

            it("returns true", ()=>{
              expect(pass).to.be.true; //I'm already pretty much confused at this point, I understand the code but I can't write the syntax by myself
	    });
	    });

   describe("when update is not successful", ()=>{
       it("returns false", ()=>{

       const notAFella = 37;
	       const book= {title: "messithegoat", author: "pabloIbile"}; 
       
      const fail1= person1.tryUpdate(notAFella);
	       const fail2 = person1.tryUpdate(book);

	       expect(fail1).to.be.false;
	       expect(fail2).to.be.false;
       });

   }); 


    });

context('greetAll', ()=>{
    
	describe('when array is valid', ()=>{

	let people;

		beforeEach(()=>{
		people= [person1,person2];

		});



	it('calls the sayHello method for each element of the array', ()=>{

       const howdy1 = chai.spy.on(person1, "sayHello");
		const howdy2 = chai.spy.on(person2, "sayHello");
                 Person.greetAll(people);

		expect(howdy1).to.have.been.called.once;
		expect(howdy2).to.have.been.called.once;
	});	
	
    it('returns an array of the strings returned by sayHello', ()=>{

      const greetings = ["Hello voila!","Hello emtau!"];
	    const greet = Person.greetAll(people);
	    expect(greet).to.eql(greetings);
//Woah, learned something new ooo!!!, eql does a deep comparition between two arrays, while equal does not wow!!!!, Javascript is funny lol!!!
    });

	});

describe("when array is not valid", ()=>{
it('throws an error when array element is not a Person Instance', ()=>{
   
  const people = [person1, person2,42];
	expect(()=> Person.greetAll(people)).to.throw(TypeError, 'elements');


	});

    });


   });

});
/*Even though I didn't fully understand everything ooo, I did learn a lot from this problem set*/
