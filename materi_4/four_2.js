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

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

//Ingin mendapatkan list Author yg sales nya di atas 1000000
const filteredBooks = books.filter((buku) => buku.sales > 1000000);
document.write(JSON.stringify(filteredBooks)  + "<br />");
const authorList = filteredBooks.map((item) => item.author);
document.write(authorList);

const helloAlert = () => alert("Hello");
const haiAlert = () => {
    alert("Hai");
};

helloAlert();
haiAlert();