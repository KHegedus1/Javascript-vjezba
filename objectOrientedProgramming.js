    let dog = {
    name :"Pas",
    numLegs : 4
    };


    let dog = {
        name: "Spot",
        numLegs: 4
      };
      console.log(dog.name);
      console.log(dog.numLegs);


      let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function() {
          return "This dog has " + dog.numLegs + " legs.";
        }
      };
      
      dog.sayLegs();


      let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function() {
          return "This dog has " + this.numLegs + " legs.";
        }
      };
      
      dog.sayLegs();


      