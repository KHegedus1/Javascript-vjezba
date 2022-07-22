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


      function Dog(name,color) {
        this.name = name;
        this.color= color;
        this.numLegs=4;
        }
        let terrier = new Dog("Pas","Black");


        function House(numBedrooms) {
          this.numBedrooms = numBedrooms;
        }
        let myHouse= new House(5);
        myHouse instanceof House;

        

        function Bird(name) {
          this.name = name;
          this.numLegs = 2;
        }
        
        let canary = new Bird("Tweety");
        let ownProps = [];
        for (let property in canary) {
          if(canary.hasOwnProperty(property)) {
            ownProps.push(property);
          }
        }


        function Dog(name) {
          this.name = name;
        }
        
        let beagle = new Dog("Snoopy");
        Dog.prototype.numLegs=4;


        
        function Dog(name) {
          this.name = name;
        }
        
        Dog.prototype.numLegs = 4;
        
        let beagle = new Dog("Snoopy");
        
        let ownProps = [];
        let prototypeProps = [];
        
        for (let property in beagle) {
          if(beagle.hasOwnProperty(property)) {
            ownProps.push(property);
          } else {
            prototypeProps.push(property);
          }
        }

        

        function Dog(name) {
          this.name = name;
        }
        
        function joinDogFraternity(candidate) {
          if (candidate.constructor === Dog) {
            return true;
          } else {
            return false;
          }
        }



        function Dog(name) {
          this.name = name;
        }
        
        Dog.prototype = {
          numLegs: 2, 
          eat: function() {
            console.log("nom nom nom");
          },
          describe: function() {
            console.log("My name is " + this.name);
          }
        };

        

        