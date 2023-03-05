/*
Tipe data array pada JavaScript digunakan untuk menyimpan kumpulan data yang serupa dalam satu variabel. 
Sebuah array dapat berisi data dalam berbagai tipe data, seperti number, string, boolean, object, bahkan array lain.

Untuk membuat sebuah array, kita bisa menggunakan tanda kurung siku ([]) dan memasukkan nilai-nilai yang akan disimpan di dalamnya, dipisahkan dengan tanda koma.

    Berikut ini adalah contoh deklarasi array pada JavaScript:
    let angka = [1, 2, 3, 4, 5]; // array berisi angka
    let nama = ["Budi", "Citra", "David"]; // array berisi string
    let campuran = [10, "hello", true]; // array berisi tipe data campuran
    let kosong = []; // array kosong

Kita juga bisa membuat array kosong dan menambahkan elemen ke dalamnya dengan menggunakan metode push(). Berikut adalah contoh penggunaan metode push():

let kosong = [];
kosong.push(10); // menambahkan elemen 10 ke dalam array
kosong.push("hello"); // menambahkan elemen "hello" ke dalam array

    Setiap elemen pada array memiliki indeks yang dimulai dari 0. Kita bisa mengakses nilai pada suatu indeks dengan menggunakan tanda kurung siku dan menuliskan nomor indeksnya di dalamnya. 
    
    Berikut adalah contoh penggunaan indeks pada array:
    let angka = [1, 2, 3, 4, 5];
    console.log(angka[0]); // output: 1
    console.log(angka[2]); // output: 3

Kita juga bisa mengubah nilai pada suatu indeks dengan cara yang sama. 
Berikut adalah contoh penggunaan indeks untuk mengubah nilai pada array:
let nama = ["Budi", "Citra", "David"];
nama[1] = "Eka";
console.log(nama); // output: ["Budi", "Eka", "David"]


JavaScript memiliki beberapa metode bawaan yang bisa digunakan untuk memanipulasi array, seperti metode push(), pop(), shift(), unshift(), splice(), dan lain-lain. Dengan menguasai tipe data array pada JavaScript, kita dapat mengelola kumpulan data dengan lebih efektif.


*/