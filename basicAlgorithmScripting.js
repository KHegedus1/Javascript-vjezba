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