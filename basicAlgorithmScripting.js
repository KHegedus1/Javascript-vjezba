function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * 9/5 +32 ;
    return fahrenheit;
  }
  
  convertCtoF(30);

  
function reverseString(str) {
    str = str.split("");
    str = str.reverse("");
    str = str.join("");
    return str;
    }
    
    reverseString("hello");


    function factorialize(num) {
        if (num === 0) {
           return 1;
         }
         return num * factorialize(num - 1);
       }
       factorialize(5);


       function findLongestWordLength(str) {
        return str.split(' ')
          .reduce(function(longest, w) {
            return Math.max(longest, w.length)
          }, 0);
      }
      
      findLongestWordLength("The quick brown fox jumped over the lazy dog");


      function largestOfFour(arr) {
        return arr.map(Function.apply.bind(Math.max, null));
      }
      
      largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


      function confirmEnding(str, target) {
        return str.slice(str.length - target.length) === target;
      }
      
      confirmEnding("Bastian", "n");


      function repeatStringNumTimes(str, num) {
        if (num < 1) {
          return "";
        } else {
          return str + repeatStringNumTimes(str, num - 1);
        }
      }

      
      function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }


      
      function findElement(arr, func) {
        return arr[arr.map(func).indexOf(true)];
      }



      function booWho(bool) {
        return typeof bool == "boolean";
      }
      
      booWho(null);


      function titleCase(str) {
        return str
          .toLowerCase()
          .replace(/(^|\s)\S/g, title => title.toUpperCase());
      }


      