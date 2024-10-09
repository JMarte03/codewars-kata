/* 

    The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the 
    letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
    The Morse code is case-insensitive, traditionally capital letters are used. When the 
    message is written in Morse code, a single space is used to separate the character codes 
    and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code 
    is ···· · −·−−   ·−−− ··− −·· ·.

    NOTE: Extra spaces before or after the code have 
    no meaning and should be ignored.

    In addition to letters, digits and some punctuation, there are some special 
    service codes, the most notorious of those is the international distress signal 
    SOS (that was first issued by Titanic), that is coded as ···−−−···. These 
    special codes are treated as single special characters, and usually are 
    transmitted as separate words.

    Your task is to implement a function that would take the morse code as 
    input and return a decoded human-readable string.
    
*/

// PREP
// separate words (array)
// loop through characters of the words
// turn characters into letters
// then join words into a string

function decodeMorse(message){

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

console.log(decodeMorse('.... . -.--   .--- ..- -.. .')) // OUTPUTS: HEY JUDE