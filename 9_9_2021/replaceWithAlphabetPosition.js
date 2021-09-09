// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    const alphabet = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = "";
    let newText = text.toLowerCase();
    for (i = 0; i < newText.length; i++) {
      if (result.length === 0) {
        if (alphabet.indexOf(newText[i]) === -1) {
          continue;
        }
        result += alphabet.indexOf(newText[i]).toString();
      } else {
        
        if (alphabet.indexOf(newText[i]) === -1) {
            continue;
        }
        result += " " + alphabet.indexOf(newText[i]).toString();
      }
    }
    return result;
  }
  
  alphabetPosition("the");