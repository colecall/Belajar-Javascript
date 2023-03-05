/* VARIABLE
Variabel dalam JavaScript digunakan untuk menyimpan nilai dan memberi nama pada nilai tersebut.
Dalam JavaScript, variabel dideklarasikan dengan menggunakan kata kunci var, let, atau const.
    
    Perbedaan antara var, let, dan const terletak pada ruang lingkup variabel. 
    var - Variabel yang memiliki ruang lingkup global atau fungsi, 
    let - variabel yang memiliki ruang lingkup blok (seperti if statement atau loop). 
    const - tidak dapat diubah setelah nilai awalnya ditetapkan.

PENENTUAN PENGGUNAAN VAR, LET, CONST?
Penentuan penggunaan antara const, let, atau var tergantung pada situasi penggunaannya. 
Namun, sejak ES6 (ECMAScript 2015), let dan const lebih disarankan untuk digunakan dibandingkan dengan var.

let disarankan untuk digunakan dalam kasus di mana teman-teman membutuhkan variabel yang nilainya dapat diubah dan memiliki ruang lingkup blok, seperti dalam loop atau if statement.

const disarankan untuk digunakan dalam kasus di mana teman-teman membutuhkan variabel yang nilainya tidak dapat diubah dan memiliki ruang lingkup blok. Misalnya, jika teman-teman ingin menyimpan nilai konstan seperti PI atau URL API, teman-teman dapat menggunakan const.

Sementara itu, var masih digunakan dalam beberapa kasus di mana teman-teman membutuhkan variabel yang memiliki ruang lingkup global atau fungsi, seperti dalam deklarasi variabel pada bagian atas file JavaScript.
Namun, penting untuk diingat bahwa penggunaan var dapat menimbulkan masalah seperti hoisting dan penumpukan variabel, sehingga disarankan untuk menghindari penggunaannya jika memungkinkan.

CONTOH CODE UNTUK PENGGUNAAN VARIABLE : 
*/

// MENGGUNAKAN VAR //
// deklarasi variabel tanpa nilai awal
var name;
// berikan nilai pada variable
name1 = "chatGPT" //
console.log(name1); // Menampilkan Hasil / Isi Variable.

// MENGGUNAKAN LET //
// deklarasi variabel dengan nilai awal
var name2 = "chatGPT";
// berikan nilai pada variable
name2 = "chatGPT"
console.log(name2); // Menampilkan Hasil / Isi Variable.

// MENGGUNAKAN CONST //
const pesan = "Hello chatGPT!";
console.log(pesan); // Output: Hello chatGPT!
pesan = "Hello chatGPT2" // Akan menghasilkan error karena const tidak bisa di reassign

/* PENAMAAN PADA VARIABLE
Berikut beberapa cara penamaan yang tepat pada variable:
    1. Nama variable sebaiknya menggambarkan nilai atau data yang disimpan.
    2. Gunakan nama yang mudah dibaca dan diingat oleh orang lain.
    3. Hindari penggunaan nama variable yang terlalu umum, seperti "data" atau "nilai".
    4. Hindari penggunaan karakter khusus atau angka pada nama variable, kecuali underscore "_" dan dollar sign "$".
    5. Gunakan huruf kecil untuk nama variable, kecuali untuk nama konstanta yang biasanya ditulis dengan huruf besar.
    6. Jika nama variable terdiri dari dua atau lebih kata, gunakan camel case, yaitu dengan mengawali kata kedua dengan huruf kapital dan tanpa spasi, contohnya "namaLengkap" atau "umurSiswa".
    7. Gunakan nama variable yang konsisten dengan gaya penamaan yang sudah ditetapkan di dalam tim atau proyek yang sama.
Dengan menggunakan cara penamaan yang tepat, kita bisa membuat kode yang lebih mudah dibaca, diingat, dan di-maintain oleh orang lain.
*/





