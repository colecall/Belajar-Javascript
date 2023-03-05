/*
Operator logika adalah operator yang digunakan untuk menggabungkan dua nilai boolean atau lebih untuk mendapatkan nilai boolean baru. 
Ada tiga operator logika yang tersedia dalam JavaScript, yaitu operator AND (&&), operator OR (||), dan operator NOT (!). 

    Berikut adalah penjelasan masing-masing operator:
    - Operator AND (&&): Operator AND menghasilkan nilai boolean true hanya jika kedua operandnya bernilai true. Jika salah satu atau kedua operandnya bernilai false, maka operator AND akan menghasilkan nilai boolean false.
    - Operator OR (||): Operator OR menghasilkan nilai boolean true jika salah satu atau kedua operandnya bernilai true. Jika kedua operandnya bernilai false, maka operator OR akan menghasilkan nilai boolean false.
    - Operator NOT (!): Operator NOT digunakan untuk membalik nilai boolean dari sebuah operand. Jika operand awalnya bernilai true, maka operator NOT akan menghasilkan nilai false. Sebaliknya, jika operand awalnya bernilai false, maka operator NOT akan menghasilkan nilai true.

        Contoh penggunaan operator logika dalam JavaScript:
        let a = true;
        let b = false;

        console.log(a && b); // hasilnya false
        console.log(a || b); // hasilnya true
        console.log(!a);     // hasilnya false
        console.log(!b);     // hasilnya true

    Pada contoh kode di atas, variabel a diinisialisasi dengan nilai boolean true dan variabel b diinisialisasi dengan nilai boolean false. Kemudian operator logika digunakan untuk menggabungkan nilai dari kedua variabel tersebut.

    Operator AND (&&) digunakan untuk memeriksa apakah kedua variabel bernilai true atau tidak. Karena variabel b bernilai false, maka hasil dari operasi AND adalah false.

    Operator OR (||) digunakan untuk memeriksa apakah salah satu atau kedua variabel bernilai true. Karena variabel a bernilai true, maka hasil dari operasi OR adalah true.

    Operator NOT (!) digunakan untuk membalikkan nilai boolean dari sebuah operand. Dalam contoh kode di atas, operator NOT digunakan untuk membalikkan nilai dari variabel a dan b. Hasilnya adalah false untuk variabel a dan true untuk variabel b.
*/