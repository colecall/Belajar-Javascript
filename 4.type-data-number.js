/*
Tipe data Number pada JavaScript digunakan untuk merepresentasikan angka. 
Tipe data ini termasuk ke dalam tipe data primitif, yang berarti bahwa mereka dianggap sebagai nilai tunggal (bukan objek). 
Berikut adalah beberapa hal penting yang perlu diketahui tentang tipe data Number pada JavaScript:

    Integer dan Floating-Point
    - JavaScript menggunakan tipe data floating-point untuk merepresentasikan semua jenis angka, termasuk bilangan bulat (integer) dan bilangan desimal (floating-point).
    - Contohnya, 1 dan 1.0 dianggap sama dalam JavaScript.

    Notasi Eksponensial
    - Tipe data Number pada JavaScript mendukung notasi eksponensial.
    - Contohnya, 1e6 sama dengan 1.000.000, dan 1e-6 sama dengan 0,000001.

    Pembulatan
    - JavaScript memiliki beberapa metode untuk membulatkan angka, seperti Math.round() (pembulatan ke bilangan bulat terdekat), Math.ceil() (pembulatan ke atas), dan Math.floor() (pembulatan ke bawah).

    Operasi Aritmatika
    - Tipe data Number pada JavaScript mendukung operasi aritmatika seperti penjumlahan (+), pengurangan (-), perkalian (*), dan pembagian (/).
    - Selain itu, JavaScript juga memiliki operator modulus (%) yang digunakan untuk menghitung sisa pembagian.

    NaN
    - NaN (Not a Number) adalah nilai khusus yang muncul ketika suatu operasi aritmatika tidak dapat menghasilkan nilai yang valid.
    - Contohnya, pembagian angka oleh 0 akan menghasilkan NaN.

Berikut adalah contoh kode yang menggunakan tipe data Number pada JavaScript:
var x = 5; // integer
var y = 3.14; // floating-point
var z = 1.5e8; // notasi eksponensial

console.log(x + y); // 8.14
console.log(z.toFixed(2)); // "150000000.00"
console.log(Math.round(y)); // 3
console.log(10 % 3); // 1
*/