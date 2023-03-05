/*
String template atau template literal adalah cara baru dalam menulis string pada JavaScript yang diperkenalkan pada ECMAScript 6 atau ES6. 
Template literal memungkinkan kita untuk menyisipkan variabel atau ekspresi JavaScript di dalam string dengan cara yang lebih mudah dan lebih intuitif.

Untuk membuat template literal, kita menggunakan tanda backtick (`) sebagai pembuka dan penutup string, dan menyisipkan variabel atau ekspresi JavaScript di dalamnya dengan menggunakan tanda dolar dan kurung kurawal (${expression}). 

    Contoh:
    let nama = "John Doe";

    let umur = 30;
    let teks = `Halo, nama saya ${nama} dan umur saya ${umur} tahun.`;
    console.log(teks);

Pada contoh kode di atas, kita membuat template literal yang berisi informasi nama dan umur, dan menyisipkan nilai variabel tersebut ke dalam string. Hasilnya adalah sebuah string yang sama dengan string pada contoh kode sebelumnya:
Halo, nama saya John Doe dan umur saya 30 tahun.

Keuntungan dari penggunaan template literal adalah kita tidak perlu lagi menggunakan operator konkatensi (+) untuk menyatukan string dan variabel, dan dapat membuat string yang lebih kompleks dengan lebih mudah. 
Kita juga dapat menulis string dalam beberapa baris tanpa harus menggunakan karakter escape () atau operator konkatensi.

    let nama = "John Doe";
    let alamat = "Jalan Sudirman no. 123\nJakarta";
    let teks = `
    Nama: ${nama}
    Alamat: ${alamat}
    `;
    console.log(teks);

Pada contoh kode di atas, kita membuat template literal yang mencakup informasi nama dan alamat, dan menulisnya dalam beberapa baris. Hasilnya adalah:

Nama: John Doe
Alamat: Jalan Sudirman no. 123
Jakarta

Kita juga dapat menggunakan ekspresi JavaScript di dalam tanda kurung kurawal (${expression}) pada template literal, sehingga kita dapat melakukan operasi atau mengambil nilai dari objek. 
    
Contoh:
    let x = 10;
    let y = 20;
    let teks = `Hasil penjumlahan ${x} dan ${y} adalah ${x + y}.`;
    console.log(teks);

Pada contoh kode di atas, kita membuat template literal yang berisi hasil penjumlahan dari variabel x dan y, yang dihitung menggunakan ekspresi JavaScript di dalam tanda kurung kurawal. Hasilnya adalah: Hasil penjumlahan 10 dan 20 adalah 30.

Kita juga dapat menggunakan template literal untuk membuat HTML atau format teks lainnya dengan lebih mudah dan lebih aman terhadap serangan injeksi kode (code injection). 

Contoh:
let nama = "John Doe";
let teks = `
  <div>
    <h1>${nama}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
`;
document.body.innerHTML = teks;

Pada contoh kode di atas, kita membuat template literal yang berisi kode HTML untuk menampilkan informasi nama dan deskripsi, dan memasukkannya ke dalam elemen body pada halaman HTML. Dengan menggunakan template literal, kita dapat membuat kode HTML dengan lebih mudah dan lebih aman terhadap serangan injeksi kode.


*/