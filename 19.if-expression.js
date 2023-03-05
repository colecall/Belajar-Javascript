/*
If expression pada JavaScript digunakan untuk menjalankan suatu blok kode tertentu jika sebuah kondisi terpenuhi. 
Kondisi tersebut bisa berupa ekspresi atau perbandingan antara dua nilai. 

    Struktur dasar dari if expression pada JavaScript adalah sebagai berikut:
    if (kondisi) {
    // kode yang akan dijalankan jika kondisi terpenuhi
    }

    Contoh penggunaan if expression pada JavaScript adalah sebagai berikut:
    let angka = 10;

    if (angka > 0) {
    console.log("Angka positif");
    }

Pada contoh di atas, if expression digunakan untuk mengecek apakah nilai variabel angka lebih besar dari 0. 
Jika kondisi tersebut terpenuhi, maka blok kode di dalam kurung kurawal akan dijalankan, yaitu menampilkan pesan "Angka positif" pada konsol.

Selain if expression tunggal, kita juga bisa menggunakan if-else expression untuk mengeksekusi blok kode tertentu jika kondisi tidak terpenuhi. 
    
    Struktur dasar dari if-else expression pada JavaScript adalah sebagai berikut:
    if (kondisi) {
    // kode yang akan dijalankan jika kondisi terpenuhi
    } else {
    // kode yang akan dijalankan jika kondisi tidak terpenuhi
    }

    Contoh penggunaan if-else expression pada JavaScript adalah sebagai berikut:
    let angka = -5;

    if (angka > 0) {
    console.log("Angka positif");
    } else {
    console.log("Angka negatif atau nol");
    }

Pada contoh di atas, if-else expression digunakan untuk mengecek apakah nilai variabel angka lebih besar dari 0. 
Jika kondisi tersebut terpenuhi, maka blok kode pada if akan dijalankan, yaitu menampilkan pesan "Angka positif" pada konsol. 
Jika kondisi tidak terpenuhi, maka blok kode pada else akan dijalankan, yaitu menampilkan pesan "Angka negatif atau nol" pada konsol.

Selain if-else expression, kita juga bisa menggunakan if-else if expression untuk mengeksekusi salah satu dari beberapa blok kode tertentu tergantung pada kondisi yang terpenuhi. 

    Struktur dasar dari if-else if expression pada JavaScript adalah sebagai berikut:
    if (kondisi1) {
    // kode yang akan dijalankan jika kondisi1 terpenuhi
    } else if (kondisi2) {
    // kode yang akan dijalankan jika kondisi2 terpenuhi
    } else if (kondisi3) {
    // kode yang akan dijalankan jika kondisi3 terpenuhi
    } else {
    // kode yang akan dijalankan jika tidak ada kondisi yang terpenuhi
    }

    Contoh penggunaan if-else if expression pada JavaScript adalah sebagai berikut:
    let nilai = 75;

    if (nilai >= 80) {
    console.log("Selamat, kamu lulus dengan nilai A!");
    } else if (nilai >= 70) {
    console.log("Selamat, kamu lulus dengan nilai B!");
    } else if (nilai >= 60) {
    console.log("Selamat, kamu lulus dengan nilai C!");
    } else {
    console.log("Maaf, kamu belum lulus.");
    }

Pada contoh di atas, kita menambahkan kondisi lain dengan menggunakan else if. 
Kondisi pertama akan dievaluasi terlebih dahulu. 
Jika tidak memenuhi syarat, maka kondisi kedua akan dievaluasi.
Begitu seterusnya hingga ditemukan kondisi yang memenuhi syarat. 
Jika tidak ada kondisi yang memenuhi syarat, maka blok else akan dieksekusi.





*/