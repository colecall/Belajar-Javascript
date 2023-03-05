/*
Operator in adalah operator pada JavaScript yang digunakan untuk memeriksa apakah sebuah properti tertentu terdapat pada sebuah objek. 
Operator ini mengembalikan nilai true jika properti tersebut terdapat pada objek, dan false jika tidak.

    Contoh penggunaan operator in:
    const person = {
    name: "John",
    age: 30,
    address: "123 Main St"
    };

    console.log("name" in person); // Output: true
    console.log("email" in person); // Output: false

Dalam contoh di atas, operator in digunakan untuk memeriksa apakah properti "name" dan "email" terdapat pada objek person. Karena properti "name" terdapat pada objek tersebut, maka console.log("name" in person) akan menghasilkan output true. Sedangkan karena properti "email" tidak terdapat pada objek tersebut, maka console.log("email" in person) akan menghasilkan output false.

Perlu diperhatikan bahwa operator in hanya berlaku untuk properti yang dapat dihitung (enumerable) pada objek. Jika kita ingin memeriksa keberadaan nilai dalam array, lebih baik menggunakan metode Array.prototype.includes().
*/