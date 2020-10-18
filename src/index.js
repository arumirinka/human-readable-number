module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let res = '';
  if (number === 0) {
    res = 'zero';
  } else if (number < 10) {
    res = ones[number];
  } else if (number < 20) {
    res = teens[number % 10];
  } else if (number < 100) {
    res = `${tens[(number - (number % 10)) / 10]} ${ones[number % 10]}`.trim();
  } else if (number < 1000) {
    res = `${ones[(number - (number % 100)) / 100]} hundred ${(tens[((number % 100) - (number % 10)) / 10] !== '') ? tens[((number % 100) - (number % 10)) / 10] + ' ' : ''}${(number % 100 < 20 && number % 100 > 9) ? teens[number % 10] : ones[number % 10]}`.trim();
  }
  return res;
}
