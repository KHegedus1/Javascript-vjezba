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

  

  