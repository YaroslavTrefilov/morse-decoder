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
    let tenCharacters = [];
    let resultStr = '';
    let string = '';

    for (let i=0; i < expr.length; i += 10) {
        tenCharacters.push(expr.substring(i, i + 10));
    }
    
    for (let i = 0; i < tenCharacters.length; i++) {
        if (tenCharacters[i] === '**********') {
            resultStr += ' ';
        } else {
            string = tenCharacters[i];
            string = string.replace(/00/gi,'');

            let currentCharacter = '';
            for (let index = 0; index < string.length; index += 2) {
                if (string.substring(index, index + 2) === '10') {
                    currentCharacter += '.';
                } else {
                    currentCharacter += '-';
                }
            }
            resultStr += MORSE_TABLE[currentCharacter];
        }

    }
    return resultStr;
}

module.exports = {
    decode
}