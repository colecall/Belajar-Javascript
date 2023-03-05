/*
Operator perbandingan adalah operator yang digunakan untuk membandingkan dua nilai.
Operator perbandingan menghasilkan nilai boolean (true atau false) tergantung pada hasil perbandingannya. Berikut adalah daftar operator perbandingan yang tersedia dalam JavaScript:

Operator	Deskripsi
=================================================================
==	        Sama dengan
!=	        Tidak sama dengan
>	        Lebih besar dari
<	        Kurang dari
>=	        Lebih besar dari atau sama dengan
<=	        Kurang dari atau sama dengan
===	        Sama dengan (tipe data dan nilai harus sama)
!==	        Tidak sama dengan (tipe data dan nilai harus berbeda)
=================================================================

    Contoh penggunaan operator perbandingan dalam JavaScript:
    let a = 5;
    let b = 3;

    console.log(a == b);   // hasilnya false
    console.log(a != b);   // hasilnya true
    console.log(a > b);    // hasilnya true
    console.log(a < b);    // hasilnya false
    console.log(a >= b);   // hasilnya true
    console.log(a <= b);   // hasilnya false

    let c = "5";
    console.log(a == c);   // hasilnya true
    console.log(a === c);  // hasilnya false
    console.log(a !== c);  // hasilnya true

Pada contoh kode di atas, variabel a diinisialisasi dengan nilai 5 dan variabel b diinisialisasi dengan nilai 3. 
Kemudian operator perbandingan digunakan untuk membandingkan nilai dari kedua variabel tersebut. Hasil dari operasi perbandingan disimpan dalam variabel boolean dan dicetak pada console.

Pada contoh kode tersebut juga terdapat perbandingan antara variabel a dengan variabel c, dimana variabel c diinisialisasi dengan nilai string "5". 
Dalam operator ==, JavaScript akan melakukan konversi tipe data sehingga hasilnya true karena nilai variabel a dan c sama. 
Namun dalam operator ===, JavaScript tidak melakukan konversi tipe data sehingga hasilnya false karena tipe data dan nilai kedua variabel berbeda. 
Sedangkan dalam operator !==, JavaScript membandingkan baik tipe data dan nilai, sehingga hasilnya true karena tipe data dari variabel a dan c berbeda.
*/