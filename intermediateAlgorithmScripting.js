function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);



  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  

  function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }

  

  function whatIsInAName(collection, source) {
    const souceKeys = Object.keys(source);
  
    return collection.filter(obj => {
      for (let i = 0; i < souceKeys.length; i++) {
        if (!obj.hasOwnProperty(souceKeys[i]) ||
            obj[souceKeys[i]] !== source[souceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  }

  

  function spinalCase(str) {
    let regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
  
  }
  
  spinalCase('This Is Spinal Tap');



  function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }



  function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
  }

  

  function pairElement(str) {
    const paired = [];
      for (let i = 0; i < str.length; i++) {
        matchWithBasePair(str[i], paired);
      }
    
      return paired;
    }
      let matchWithBasePair = function(char, pairedArray) {
        switch (char) {
          case "A":
            pairedArray.push(["A", "T"]);
            break;
          case "T":
            pairedArray.push(["T", "A"]);
            break;
          case "C":
            pairedArray.push(["C", "G"]);
            break;
          case "G":
            pairedArray.push(["G", "C"]);
            break;
        }
      };
    

      
      function fearNotLetter(str) {
        let currCharCode = str.charCodeAt(0);
        let missing = undefined;
      
        str
          .split("")
          .forEach(letter => {
            if (letter.charCodeAt(0) === currCharCode) {
              currCharCode++;
            } else {
              missing = String.fromCharCode(currCharCode);
            }
          });
      
        return missing;
      }

      

      function uniteUnique(arr) {
        const args = [...arguments];
        const result = [];
        for (let i = 0; i < args.length; i++) {
          for (let j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
              result.push(args[i][j]);
            }
          }
        }
        return result;
      }
      
      uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

      

      function convertHTML(str) {

        var temp = str.split("");
        
          for (var i = 0; i < temp.length; i++) {
            switch (temp[i]) {
              case "<":
                temp[i] = "&lt;";
                break;
              case "&":
                temp[i] = "&amp;";
                break;
              case ">":
                temp[i] = "&gt;";
                break;
              case '"':
                temp[i] = "&quot;";
                break;
              case "'":
                temp[i] = "&apos;";
                break;
            }
          }
        
          temp = temp.join("");
          return temp;
        }



        function sumFibs(num) {
          let prevNumber = 0;
          let currNumber = 1;
          let result = 0;
          while (currNumber <= num) {
            if (currNumber % 2 !== 0) {
              result += currNumber;
            }
            currNumber += prevNumber;
            prevNumber = currNumber - prevNumber;
          }
        
          return result;
        }

        

        function sumPrimes(num) {
          let primes = [];
          for (let i = 2; i <= num; i++) {
            if (primes.every((prime) => i % prime !== 0))
              primes.push(i);
          }
          return primes.reduce((sum, prime) => sum + prime, 0);
        }



        function smallestCommons(arr) {
          const [min, max] = arr.sort((a, b) => a - b);
          const numberDivisors = max - min + 1;
          let upperBound = 1;
          for (let i = min; i <= max; i++) {
            upperBound *= i;
          }
          for (let multiple = max; multiple <= upperBound; multiple += max) {
            let divisorCount = 0;
            for (let i = min; i <= max; i++) {
              if (multiple % i === 0) {
                divisorCount += 1;
              }
            }
            if (divisorCount === numberDivisors) {
              return multiple;
            }
          }
        }



        function dropElements(arr, func) {
          while (arr.length > 0 && !func(arr[0])) {
            arr.shift();
          }
          return arr;
        }
        
        dropElements([1, 2, 3], function(n) {return n < 3; });



        function steamrollArray(arr) {
          const flat = [].concat(...arr);
          return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
        }
        
        steamrollArray([1, [2], [3, [[4]]]]);



        function binaryAgent(str) {
          var biString = str.split(" ");
          var uniString = [];
        
          for (var i = 0; i < biString.length; i++) {
            uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
          }
        
          return uniString.join("");
        }

        

        function truthCheck(collection, pre) {
          let counter = 0;
          for (let c in collection) {
            if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
              counter++;
            }
          }
          return counter == collection.length;
        }

        

        function addTogether() {
          const [first, second] = arguments;
          if (typeof(first) !== "number")
            return undefined;
          if (arguments.length === 1)
            return (second) => addTogether(first, second);
          if (typeof(second) !== "number")
            return undefined;
          return first + second;
        }

        

        const Person = function(firstAndLast) {
          let fullName = firstAndLast;
        
          this.getFirstName = function() {
            return fullName.split(" ")[0];
          };
        
          this.getLastName = function() {
            return fullName.split(" ")[1];
          };
        
          this.getFullName = function() {
            return fullName;
          };
        
          this.setFirstName = function(name) {
            fullName = name + " " + fullName.split(" ")[1];
          };
        
          this.setLastName = function(name) {
            fullName = fullName.split(" ")[0] + " " + name;
          };
        
          this.setFullName = function(name) {
            fullName = name;
          };
        };
        
        
        const bob = new Person('Bob Ross');
        bob.getFullName();



        function orbitalPeriod(arr) {
          const GM = 398600.4418;
          const earthRadius = 6367.4447;
          const a = 2 * Math.PI;
          const newArr = [];
        
          const getOrbPeriod = function(obj) {
            const c = Math.pow(earthRadius + obj.avgAlt, 3);
            const b = Math.sqrt(c / GM);
            const orbPeriod = Math.round(a * b);
        
            return {name: obj.name, orbitalPeriod: orbPeriod};
          };
        
          for (let elem in arr) {
            newArr.push(getOrbPeriod(arr[elem]));
          }
        
          return newArr;
        }
        