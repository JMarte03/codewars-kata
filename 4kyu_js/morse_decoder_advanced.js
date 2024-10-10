var decodeBits = function(bits){
    // Create a dict with binary to morse
    const binMorse = {
        '11': '.',
        '111111': '-',
        '00': '',
        '000000': ' ',
        '00000000000000': '   '
    }
    return bits.split('00000000000000').map((bc) => { // // separate binary by words  ['110011001100110000001100000011111100110011111100111111', '11001111110011111100111111000000110011001111110000001111110011001100000011']
        return bc.split('000000').map((sc) => { // separate words by letters
            return sc.split('00').map((el) => { // separate characters within letters
                el = binMorse[el] // turn characters into morse code
                return el
            }).join('') // join characters
        }).join(' ') // join letters by space
    }).join('   ')  // join words by triple space
}

var decodeMorse = function(message){

    const morseCode = {
        // Letters
        '.-': 'A',    '-...': 'B',  '-.-.': 'C',  '-..': 'D',   '.': 'E',  
        '..-.': 'F',  '--.': 'G',   '....': 'H',  '..': 'I',    '.---': 'J',
        '-.-': 'K',   '.-..': 'L',  '--': 'M',    '-.': 'N',    '---': 'O',
        '.--.': 'P',  '--.-': 'Q',  '.-.': 'R',   '...': 'S',   '-': 'T',   
        '..-': 'U',   '...-': 'V',  '.--': 'W',   '-..-': 'X',  '-.--': 'Y',
        '--..': 'Z',  
    
        // Numbers
        '.----': '1', '..---': '2', '...--': '3', '....-': '4', 
        '.....': '5', '-....': '6', '--...': '7', '---..': '8', 
        '----.': '9', '-----': '0',
    
        // Punctuation
        '.-.-.-': '.', '--..--': ',', '..--..': '?', '-.-.--': '!', 
        '-.--.': '(', '-.--.-': ')', '.----.': "'", '-..-.': '/',
    
        // Special service codes
        '...---...': 'SOS',    // Distress signal
        '.-.-.': 'AR',         // End of message (Acknowledged)
        '-...-': 'BT',         // Pause/break (New paragraph)
        '-.-.-': 'KA',         // Start of transmission (Invitation to transmit)
    };

    let arr = message.split("   ") // Separates sentence by words [ '.... . -.--', '.--- ..- -.. .' ] ('hey', 'jude')
    return arr.map((w) => { 
        let c = w.trim().split(' ') // Separates words by letters (words) [ ['....', '.', '-.--'], ['.---', '..- -..', '.'] ] (['h', 'e', 'y'], ['j', 'u', 'd', 'e'])
        for (let i = 0; i < c.length; i++){
            c[i] = morseCode[c[i]] // turns morse code into actual letters
        }
        return c.join('') // joins letters
    })
    .join(" ") //joins words by space
}

console.log(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')))