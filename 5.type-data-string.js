/*
Tipe data String pada JavaScript digunakan untuk merepresentasikan teks atau karakter. 
Tipe data ini termasuk ke dalam tipe data primitif, yang berarti bahwa mereka dianggap sebagai nilai tunggal (bukan objek). 
Berikut adalah beberapa hal penting yang perlu diketahui tentang tipe data String pada JavaScript:

    Penulisan
    - String pada JavaScript ditulis dengan menggunakan tanda kutip (single quote atau double quote), atau backtick (`) untuk string multi-baris.
    - Contohnya: "Halo", 'JavaScript', Ini adalah string multi-baris.
    
    Panjang
    - Panjang sebuah string dapat dihitung menggunakan property length.
    - Contohnya: "Halo".length akan menghasilkan nilai 4.
    
    Escape Character
    - Karakter backslash () digunakan untuk mengawali karakter escape.
    - Beberapa karakter escape yang umum digunakan antara lain \n untuk baris baru, \t untuk tab, dan \ untuk menuliskan karakter backslash.
    - Contohnya: "Halo\nDunia" akan menampilkan "Halo" dan "Dunia" di baris yang berbeda.
    
    Concatenation
    - String dapat digabungkan dengan menggunakan operator plus (+).
    - Contohnya: "Halo" + " " + "Dunia" akan menghasilkan string "Halo Dunia".
    
    Method
    - String pada JavaScript memiliki beberapa method yang dapat digunakan untuk memanipulasi string.
    - Beberapa method umum yang sering digunakan antara lain: toUpperCase() untuk membuat string menjadi huruf besar, toLowerCase() untuk membuat string menjadi huruf kecil, dan split() untuk memecah string menjadi array berdasarkan karakter tertentu.

Berikut adalah contoh kode yang menggunakan tipe data String pada JavaScript:

var nama = "John";
var pesan = "Halo, " + nama + "!";
var teks = "Ini adalah sebuah string multi-baris\nyang sangat panjang.";

console.log(nama.length); // 4
console.log(pesan); // "Halo, John!"
console.log(teks.toUpperCase()); // "INI ADALAH SEBUAH STRING MULTI-BARIS\nYANG SANGAT PANJANG."
console.log(teks.split("\n")); // ["Ini adalah sebuah string multi-baris", "yang sangat panjang."]

*/