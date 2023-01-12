const deret = [];

//1,3,5,7,9,...
/*
1 = 1 = 1 + 0
2 = 3 = 2 + 1
3 = 5 = 3 + 2
5 = 9 = 5 + 4
*/
for (let i = 1; i <= 100; i++) {
    const result = i + (i - 1);
    deret.push(result); 
}

//Mencari angka 11 dan 12
document.write(deret.indexOf(11) + "<br />");
document.write(deret.indexOf(12)  + "<br />");
const welcome = "Selamat Jalan";
document.write(welcome.indexOf("a")  + "<br />");

function displayAlert() {
    alert("Hello");
}

class Deret {

    constructor(deret) {
        this.deretKu = deret;
    }

    dapatIndex(nilai) {
        return this.deretKu.indexOf(nilai);
    }

    cekApakahAda(nilai) {
        return this.deretKu.includes(nilai);
    }
}

const deretPertama = new Deret(deret);
document.write(deretPertama.dapatIndex(11) + "<br />");
document.write(deretPertama.cekApakahAda(20) + "<br />");
displayAlert();