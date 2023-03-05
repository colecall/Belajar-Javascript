/*
Tipe data object pada JavaScript digunakan untuk merepresentasikan sebuah objek atau entitas dalam bentuk properti dan nilai. 
Properti pada sebuah objek dapat berisi nilai dalam berbagai tipe data, seperti number, string, boolean, array, bahkan objek lain.

Untuk membuat sebuah objek pada JavaScript, kita bisa menggunakan tanda kurung kurawal ({}) dan menuliskan properti dan nilainya di dalamnya, dipisahkan dengan tanda koma. Berikut ini adalah 
    
    contoh deklarasi objek pada JavaScript:
    let mahasiswa = {
    nama: "Budi",
    umur: 20,
    nilai: [80, 85, 90],
    aktif: true
    };

Pada contoh di atas, kita membuat sebuah objek bernama mahasiswa yang memiliki empat properti, yaitu nama, umur, nilai, dan aktif. Properti nama dan aktif berisi tipe data boolean, properti umur berisi tipe data number, dan properti nilai berisi tipe data array.

Kita juga bisa mengakses properti pada objek dengan menggunakan tanda titik (.). 
    
    Berikut adalah contoh penggunaan properti pada objek:
    console.log(mahasiswa.nama); // output: "Budi"
    console.log(mahasiswa.nilai[1]); // output: 85

Kita juga bisa menambahkan atau mengubah properti pada sebuah objek dengan cara yang sama. Berikut adalah contoh penggunaan objek untuk menambahkan properti baru dan mengubah nilai properti:

mahasiswa.jurusan = "Teknik Informatika"; // menambahkan properti jurusan
mahasiswa.nilai[2] = 95; // mengubah nilai properti pada array nilai
console.log(mahasiswa); // output: {nama: "Budi", umur: 20, nilai: [80, 85, 95], aktif: true, jurusan: "Teknik Informatika"}

JavaScript memiliki beberapa metode bawaan yang bisa digunakan untuk memanipulasi objek, seperti metode Object.keys(), Object.values(), Object.entries(), dan lain-lain. Dengan menguasai tipe data object pada JavaScript, kita dapat merepresentasikan sebuah entitas secara lebih kompleks dan melakukan manipulasi data dengan lebih efektif.
*/