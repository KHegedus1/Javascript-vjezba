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