/*
Dalam JavaScript, undefined adalah sebuah nilai yang menunjukkan bahwa suatu variabel atau objek tidak memiliki nilai atau tidak terdefinisi. 
Secara umum, undefined dihasilkan ketika kita mencoba mengakses nilai dari sebuah variabel yang belum diinisialisasi atau dari sebuah properti objek yang tidak ada.

    Contoh penggunaan:
    let x;
    console.log(x); // Output: undefined

    let obj = {};
    console.log(obj.nama); // Output: undefined

Selain itu, undefined juga dapat dihasilkan oleh sebuah fungsi jika fungsi tersebut tidak mengembalikan nilai apapun atau memiliki sebuah parameter yang tidak terdefinisi.

    Contoh penggunaan:
    function tidakAdaNilai() {
    // tidak ada kode yang mengembalikan nilai
    }

    console.log(tidakAdaNilai()); // Output: undefined

    function fungsiDenganParameter(y) {
    console.log(y);
    }

    fungsiDenganParameter(); // Output: undefined

Ketika kita mencoba mengakses sebuah variabel atau objek yang belum diinisialisasi, atau sebuah properti objek yang tidak ada, sebaiknya kita selalu memastikan untuk memeriksa apakah variabel atau objek tersebut memiliki nilai atau tidak sebelum mengaksesnya untuk menghindari error yang tidak diinginkan.

*/

/*
null adalah sebuah nilai yang menunjukkan ketiadaan nilai. Dalam JavaScript, null dianggap sebagai sebuah objek, meskipun sebenarnya itu adalah sebuah tipe data primitif.

Anda dapat menginisialisasi sebuah variabel dengan nilai null ketika ingin menyatakan bahwa variabel tersebut tidak memiliki nilai atau nilai yang kosong.

    Contoh penggunaan:
    let x = null;
    console.log(x); // Output: null

Perlu diingat bahwa null berbeda dengan undefined. 
undefined menunjukkan ketidakterdefinisian nilai, sedangkan null menunjukkan bahwa variabel atau objek tersebut tidak memiliki nilai.

Jika Anda ingin memeriksa apakah sebuah variabel atau objek telah diinisialisasi atau tidak, sebaiknya periksa dengan operator typeof atau !== untuk memeriksa apakah nilainya null.

    Contoh penggunaan:
    let x = null;
    console.log(typeof x); // Output: object

    let y;
    console.log(y !== null); // Output: true

Dalam penggunaan sehari-hari, null sering digunakan untuk menghapus sebuah nilai pada objek, misalnya menghapus nilai dari sebuah array atau objek.

    Contoh penggunaan:
    let arr = [1, 2, 3];
    arr[1] = null;
    console.log(arr); // Output: [1, null, 3]

    let obj = {name: "John", age: 30};
    obj.name = null;
    console.log(obj); // Output: {name: null, age: 30}

Perlu diingat bahwa null tidak sama dengan sebuah string kosong atau nilai 0. Jadi, sebaiknya periksa nilai variabel atau objek dengan cermat sebelum menggunakan nilai null untuk menghindari kesalahan yang tidak diinginkan.


*/