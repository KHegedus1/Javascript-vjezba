let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex); 

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; 
let result = difficultSpelling.match(myRegex);

let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);

let reCriminals = /C+/; 

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result = quoteSample.match(alphabetRegexV2).length;

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let result = quoteSample.match(nonAlphabetRegex).length;

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi; 
let result = movieName.match(numRegex).length;

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/gi; 
let result = movieName.match(noNumRegex).length;

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i 
let result = userCheck.test(username);

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/gi; 
let result = sample.match(countWhiteSpace);

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/gi;
let result = sample.match(countNonWhiteSpace);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/
let result = myRegex.test(myString);

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/gi;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);