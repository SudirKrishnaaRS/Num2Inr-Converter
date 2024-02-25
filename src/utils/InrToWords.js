export function price_in_words(currencyInput) {
    var singleDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
      doubleDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
      tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
      handle_tens = function(dgt, prevDgt) {
        return 0 == dgt ? "" : " " + (1 == dgt ? doubleDigit[prevDgt] : tensPlace[dgt])
      },
      handle_utlc = function(dgt, nxtDgt, denom) {
        return (0 != dgt && 1 != nxtDgt ? " " + singleDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "")
      };
  
    var str = "",
      digitIdx = 0,
      digit = 0,
      nextDigit = 0,
      words = [];
    if (currencyInput += "", isNaN(parseInt(currencyInput))) str = "";
    else if (parseInt(currencyInput) > 0 && currencyInput.length <= 10) {
      for (digitIdx = currencyInput.length - 1; digitIdx >= 0; digitIdx--) switch (digit = currencyInput[digitIdx] - 0, nextDigit = digitIdx > 0 ? currencyInput[digitIdx - 1] - 0 : 0, currencyInput.length - digitIdx - 1) {
        case 0:
          words.push(handle_utlc(digit, nextDigit, ""));
          break;
        case 1:
          words.push(handle_tens(digit, currencyInput[digitIdx + 1]));
          break;
        case 2:
          words.push(0 != digit ? " " + singleDigit[digit] + " Hundred" + (0 != currencyInput[digitIdx + 1] && 0 != currencyInput[digitIdx + 2] ? " and" : "") : "");
          break;
        case 3:
          words.push(handle_utlc(digit, nextDigit, "Thousand"));
          break;
        case 4:
          words.push(handle_tens(digit, currencyInput[digitIdx + 1]));
          break;
        case 5:
          words.push(handle_utlc(digit, nextDigit, "Lakh"));
          break;
        case 6:
          words.push(handle_tens(digit, currencyInput[digitIdx + 1]));
          break;
        case 7:
          words.push(handle_utlc(digit, nextDigit, "Crore"));
          break;
        case 8:
          words.push(handle_tens(digit, currencyInput[digitIdx + 1]));
          break;
        case 9:
          words.push(0 != digit ? " " + singleDigit[digit] + " Hundred" + (0 != currencyInput[digitIdx + 1] || 0 != currencyInput[digitIdx + 2] ? " and" : " Crore") : "")
      }
      str = words.reverse().join("")
    } else str = "";
    return str
  
  }