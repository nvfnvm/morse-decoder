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
    morseConversion = '';
    result = '';

    for(let i = 0; i <= expr.length - 1; i += 10) {
        let char = expr.slice(i, i + 10);
        morseConversion = '';

        for(let j = char.length; j >= 0; j -= 2) {
            let piece = char.slice(j - 2, j);
            if(piece === "10") {
                morseConversion="."+morseConversion;
            }if(piece === "11") {
                morseConversion ="-"+morseConversion;
            }
        }
        
        if (MORSE_TABLE[morseConversion]) {
            result += MORSE_TABLE[morseConversion];
        } else {
            result += " ";
        }
       
    }
    return result;
}

module.exports = {
    decode
}