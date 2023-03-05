/*
Tipe data Boolean pada JavaScript digunakan untuk merepresentasikan nilai kebenaran (true atau false). Tipe data ini termasuk ke dalam tipe data primitif, yang berarti bahwa mereka dianggap sebagai nilai tunggal (bukan objek). Berikut adalah beberapa hal penting yang perlu diketahui tentang tipe data Boolean pada JavaScript:

    Penulisan
    - Boolean pada JavaScript ditulis dengan menggunakan kata kunci true atau false (tanpa tanda kutip).
    - Contohnya: true, false.
    
    Operator
    - Beberapa operator yang sering digunakan dalam penggunaan tipe data Boolean adalah operator perbandingan dan operator logika.
    - Operator perbandingan seperti == (sama dengan), != (tidak sama dengan), < (kurang dari), > (lebih dari), <= (kurang dari atau sama dengan), dan >= (lebih dari atau sama dengan).
    - Operator logika seperti && (AND), || (OR), dan ! (NOT).
    
    Type Coercion
    - Saat melakukan perbandingan antara tipe data yang berbeda, JavaScript akan melakukan konversi secara otomatis.
    - Contohnya: 0 == false akan menghasilkan true, karena JavaScript akan menganggap keduanya sebagai nilai yang sama.

Berikut adalah contoh kode yang menggunakan tipe data Boolean pada JavaScript:
var x = 5;
var y = 10;
var z = true;

console.log(x < y); // true
console.log(x == y); // false
console.log(z); // true
console.log(!z); // false
console.log(0 == false); // true
console.log(1 == true); // true
console.log("hello" == true); // false


*/