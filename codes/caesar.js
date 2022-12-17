let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let newAlphabet = '';

function caesar(message, num) {
    
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + num) % alphabet.length;
        newAlphabet += alphabet[offset];
    }

    let encode = '';
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let char = message[i];
        let index = alphabet.indexOf(message[i]);
        if (char === ' ') {
            encode += ' ';
            continue;
        }
        encode += newAlphabet[index];
        
    }
    return encode;    
}

module.exports = caesar;