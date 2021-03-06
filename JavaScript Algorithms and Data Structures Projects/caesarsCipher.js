/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/ 

/*
Tests:
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
Waiting:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
Waiting:rot13("SERR YBIR?") should decode to the string FREE LOVE?
Waiting:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/



function rot13(str) {
    let charCode = 0;
    let niz = [];
    niz = str.split(""); // string se pretvara u array
    for (let i = 0; i < niz.length; i++) {
      charCode = niz[i].charCodeAt();
        if (charCode > 64 && charCode < 91) {
        if (charCode > 77) {
          charCode = charCode - 13;
        }
        else {
          charCode = charCode + 13;
        }
  
        niz.splice(i,1,String.fromCharCode(charCode));
      }
    }
    return niz.join(''); // array se pridruzuje vrijednosti
  }
  
  rot13("SERR PBQR PNZC");