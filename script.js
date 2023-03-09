var entrada = prompt('Forneça uma string para ser revertida');

function reverseString(str) {
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
    alert('A string revertida é: ' + newString);
}

reverseString(entrada);