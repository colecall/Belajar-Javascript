/*
switch adalah sebuah statement pada JavaScript yang digunakan untuk memeriksa kondisi tertentu dan menjalankan perintah yang berbeda tergantung pada nilai dari kondisi tersebut.

    Contoh sintaks dari switch expression:
    switch (expression) {
    case value1:
        // perintah yang akan dijalankan jika expression sama dengan value1
        break;
    case value2:
        // perintah yang akan dijalankan jika expression sama dengan value2
        break;
    default:
        // perintah yang akan dijalankan jika tidak ada case yang cocok dengan expression
        break;
    }

expression adalah nilai yang akan diuji dalam switch. value1, value2, dan seterusnya adalah nilai yang akan dibandingkan dengan expression.

Setiap case harus diakhiri dengan perintah break untuk menghentikan eksekusi kode pada switch dan mencegah eksekusi kode pada case berikutnya. default akan dijalankan jika tidak ada case yang cocok dengan expression.

    Contoh penggunaan switch expression:
    let day = 3;
    let dayName;

    switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Unknown day";
        break;
    }

    console.log(dayName); // Output: Tuesday

Dalam contoh di atas, switch expression memeriksa nilai dari variabel day dan menentukan nama hari yang sesuai. Karena nilai dari day adalah 3, case ketiga akan cocok dan variabel dayName akan diinisialisasi dengan "Tuesday". Kemudian, nilai dari dayName dicetak ke console.
*/