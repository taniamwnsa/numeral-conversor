const input = document.getElementById("inputNumber");
const inputBase = document.getElementById("inputBase");
const output = document.getElementById("outputNumber");
const outputBase = document.getElementById("outputBase");

function convert() {
    let inputValue = input.value;
    let originBase = parseInt(inputBase.value);
    let destinyBase = parseInt(outputBase.value);

    if (inputValue === "") {
        output.value = "";
        return;
    }

    let number = parseInt(inputValue, originBase);

    let isValid = !isNaN(number) && number.toString(originBase) === inputValue.toLowerCase();

    if (!isValid) {
        output.value = "Número inválido";
    } else {
        output.value = number.toString(destinyBase).toUpperCase();
    }
}

input.addEventListener('input', convert);
