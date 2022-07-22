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


      function Dog(){
        this.name ="pas";
        this.color="black";
        this.numLegs=4;
      }


      function Dog() {
        this.name = "Rupert";
        this.color = "brown";
        this.numLegs = 4;
      }
      let hound = new Dog();


      