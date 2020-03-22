const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
let arr = [];
let arr1 = [];
for(let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
    } 
  
for(let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].replace(/00/g, "");
}
  
for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/10/g, ".");
    }


for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/11/g, "-");
    }

  
for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/\*\*\*\*\*\*\*\*\*\*/g, " ")
    for(let key in MORSE_TABLE) {
        if (key === arr[i]) {
            arr[i] = MORSE_TABLE[key]
            }
        }
}
  
  let str = arr.join('');
  return str;
}

module.exports = {
    decode
}