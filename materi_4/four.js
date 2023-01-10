let no_phone = "022  5417514";
no_phone = no_phone.replaceAll(' ', '-');

let url = "https://docs.google.com/presentation/d/";
const temp = url.substring(6, 23);  //start index, end index

const url_kecil = url.toLowerCase();
const url_besar = url.toUpperCase();

document.write(temp + "<br />");
document.write("Lowercase : " + url_kecil + "<br />");
document.write("Uppercase : " +  url_besar + "<br />");
document.write(url + "<br />");

const data = [5, 6, 8, 3, 2];
data.sort();
document.write(data + "<br />");
data.sort((a, b) => a - b);
document.write(data + "<br />");
data.sort((a, b) => b - a);
document.write(data + "<br />");




var splitStrings = url.toLowerCase().split('.');
for (let i = 0; i < splitStrings.length; i++) {
    if (i == 0) {
        splitStrings[i] = splitStrings[i].substring(0,8) + splitStrings[i].charAt(8).toUpperCase() + 
            splitStrings[i].substring(9); 
    } else {
        splitStrings[i] = splitStrings[i].charAt(0).toUpperCase() + splitStrings[i].substring(1); 
    }
}

var output = splitStrings.join('.');
// document.write(output + "<br />");


const rows = [
    {
        id: 1, 
        name: "Sabrina",
        age: 36
    },
    {
        id: 2, 
        name: "Andika",
        age: 29
    },
    {
        id: 3, 
        name: "Rizki",
        age: 28
    }
]

rows.sort((a, b) => a.age - b.age);
document.write(JSON.stringify(rows) + "<br />");

/**
 * Ilustrasi Class dan Object. 
 * Class itu prototype. Object itu wujud nyata dari Class.
 * Misal, class Alat Tulis. Maka object nya Pulpen dan Pensil.
 */
class Sport {
    constructor(name) {
        this.namaOlahraga = name;
    }

    displayNamaOlahraga() {
        document.write(this.namaOlahraga  + "<br />");
    }
}

const football = new Sport("football");
const basket = new Sport("basket");
football.displayNamaOlahraga();
basket.displayNamaOlahraga();

class Cars {
    constructor(listMobil, tahun) {
      this.carList = listMobil;
      this.year = tahun;
    }

    getCarByIndex(name) {
        return this.carList.indexOf(name);
    }

    isCarExist(name) {
        return this.carList.includes(name);
    }

    printAllCars() {
        return JSON.stringify(this.carList);
    }
}

const andikaCars = new Cars(["Honda WRV", "Toyota Veloz", "Toyota Rush"], 2022);
const gayuhCars = new Cars(["Honda HRV", "Fortuner"], 2020);

document.write(andikaCars.carList + "<br />");
document.write(andikaCars.year + "<br />" );
document.write(gayuhCars.carList + "<br />");
document.write(gayuhCars.year + "<br />" );
document.write(andikaCars.printAllCars());
// document.write(andikaCars.getCarByIndex("Toyota Rush") + "<br />");
// document.write(andikaCars.isCarExist("Toyota Veloz") + "<br />");


