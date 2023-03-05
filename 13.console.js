/*
Console adalah sebuah objek pada JavaScript yang digunakan untuk menampilkan informasi di konsol atau console log pada browser. 
Console dapat digunakan untuk memeriksa nilai variabel, melacak pesan kesalahan, dan melakukan debugging pada program JavaScript.
    
    Beberapa method yang tersedia pada objek console adalah:
    - console.log(): digunakan untuk menampilkan pesan di konsol. Method ini dapat menerima satu atau lebih argumen, dan dapat menampilkan nilai dari variabel atau objek. 
        Contoh:
        let nama = "John Doe";
        let umur = 30;
        console.log("Halo, nama saya " + nama + " dan umur saya " + umur + " tahun.");

    - console.warn(): digunakan untuk menampilkan pesan peringatan di konsol. 
    Method ini menghasilkan output yang sama seperti console.log(), namun dengan warna dan simbol yang berbeda. 
        Contoh:
        console.warn("Ini adalah pesan peringatan.");

    - console.error(): digunakan untuk menampilkan pesan error di konsol. 
    Method ini menghasilkan output yang sama seperti console.log() dan console.warn(), namun dengan warna dan simbol yang berbeda. 
        Contoh:
        console.error("Terjadi kesalahan pada program.");

    - console.table(): digunakan untuk menampilkan data dalam bentuk tabel di konsol. 
    Method ini menerima satu atau lebih objek atau array, dan menampilkan properti dari objek atau isi dari array dalam bentuk tabel. 
        Contoh:
        let mahasiswa = [
            { nama: "John Doe", jurusan: "Informatika" },
            { nama: "Jane Smith", jurusan: "Sistem Informasi" },
            { nama: "Bob Marley", jurusan: "Teknik Elektro" }
        ];
        console.table(mahasiswa);
    
    Pada contoh kode di atas, method console.table() digunakan untuk menampilkan data mahasiswa dalam bentuk tabel di konsol.

Console sangat berguna dalam melakukan debugging pada program JavaScript. Dengan menggunakan console, kita dapat melacak pesan kesalahan dan memeriksa nilai dari variabel atau objek pada program.
*/