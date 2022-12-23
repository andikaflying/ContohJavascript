const CORRECT_MESSAGE = "Ini adalah message yg correct";
var angka = 10;
let angka_2 = 15;

angka = 20;

function tebakUmur(number) {
    let message;

    if (number < 5) {
        message = "Masih balita";    
    } else if (number < 20) {
        message = "Masih remaja";
    } else {
        message = "Sudah dewasa";
    }

    return message;
}

function menampilkanError(isError) {
    if (isError) {
        alert("View ini error");
    } else {
        alert("View ini tidak error");
    }
}

function displayDividedThree(n) {
    let numberList = [];

    for(let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            numberList.push(i);
        }
    }

    return numberList;
} 

function displayHelloWords(n) {
    let isDone = false;
    let message = "";
    let index = 1;

    while (isDone != true) {
        message = message + "Hello World ";

        if (index == n) {
            isDone = true;
        } else {
            index++;
        }
    }

    return message
}

/**
 * AND = &&
 * true AND true    = true
 * true AND false   = false
 * false AND true   = false
 * false AND false  = false
 * 
 * OR = ||
 * true  || true     = true
 * true  || false    = true
 * false || true     = true
 * false || false    = false
 */

const negaraMobil = (mobil) => {
    if ((mobil === "nissan") || (mobil === "honda") || (mobil === "suzuki")) {
        return "jepang";
    } else {
        return "negara lain";
    }
}

const info_1 = tebakUmur(3);
const info_2 = tebakUmur(40);
// menampilkanError(true);

const numbers = displayDividedThree(20);

// document.write(numbers);