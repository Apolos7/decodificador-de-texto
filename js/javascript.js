const input = document.getElementById('input');
const placeholder = document.getElementById('div-default');
const textOutputContainer = document.getElementById('div-replace');
const textOutput = document.getElementById('output');

function criptografar() {
    let text = input.value;

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == 'a') {
            text = text.slice(0, i) + 'ai' + text.slice(i + 1, text.length);
            i += 1;
        } else if (text.charAt(i) == 'e') {
            text = text.slice(0, i) + 'enter' + text.slice(i + 1, text.length);
            i += 4;
        } else if (text.charAt(i) == 'i') {
            text = text.slice(0, i) + 'imes' + text.slice(i + 1, text.length);
            i += 3;
        } else if (text.charAt(i) == 'o') {
            text = text.slice(0, i) + 'ober' + text.slice(i + 1, text.length);
            i += 3;
        } else if (text.charAt(i) == 'u') {
            text = text.slice(0, i) + 'ufat' + text.slice(i + 1, text.length);
            i += 3;
        }
    }
    showResult(text);
}

function descriptografar() {
    let text = input.value;

    for (let i = 0; i < text.length; i++) {
        if (text.slice(i, i + 2) == 'ai') {
            text = text.slice(0, i) + 'a' + text.slice(i + 2, text.length);
        } else if (text.slice(i, i + 5) == 'enter') {
            text = text.slice(0, i) + 'e' + text.slice(i + 5, text.length);
        } else if (text.slice(i, i + 4) == 'imes') {
            text = text.slice(0, i) + 'i' + text.slice(i + 4, text.length);
        } else if (text.slice(i, i + 4) == 'ober') {
            text = text.slice(0, i) + 'o' + text.slice(i + 4, text.length);
        } else if (text.slice(i, i + 4) == 'ufat') {
            text = text.slice(0, i) + 'u' + text.slice(i + 4, text.length);
        }
    }

    showResult(text);
}

function copiar() {
    textOutput.select();
    textOutput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textOutput.setSelectionRange(0, 0);
}


function showResult(text) {
    placeholder.style.display = 'none';
    placeholder.style.visibility = 'hidden';
    textOutput.textContent = text;
    textOutputContainer.style.display = 'flex';
    textOutputContainer.style.visibility = 'visible'
}