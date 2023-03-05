/*
Pada JavaScript, terdapat dua jenis tipe data yang sering digunakan, yaitu:
- tipe data string (teks)
- tipe data number (angka). 
Kita dapat mengubah tipe data string menjadi number dan sebaliknya menggunakan konversi tipe data. 
Berikut adalah penjelasan singkat mengenai konversi string dan number pada JavaScript.

    Konversi String ke Number:
    Untuk mengubah tipe data string ke tipe data number, kita dapat menggunakan fungsi parseInt() atau parseFloat(). 
    Fungsi parseInt() digunakan untuk mengubah string menjadi bilangan bulat (integer), sedangkan parseFloat() digunakan untuk mengubah string menjadi bilangan pecahan (floating-point). 
        
        Contoh:
        let angka1 = parseInt("100"); // hasilnya adalah angka 100 (tipe data: number)
        let angka2 = parseFloat("3.14"); // hasilnya adalah angka 3.14 (tipe data: number)
        let angka3 = parseInt("101", 2); // hasilnya adalah angka 5 (tipe data: number)
    
    Pada contoh ketiga di atas, kita menggunakan fungsi parseInt() dengan parameter kedua yaitu basis bilangan. Dalam kasus ini, kita mengubah bilangan biner (basis 2) "101" menjadi bilangan desimal (basis 10) dengan menggunakan parameter kedua bernilai 2.

    Konversi Number ke String:
    Untuk mengubah tipe data number ke tipe data string, kita dapat menggunakan fungsi toString(). Fungsi toString() mengubah angka menjadi string dengan basis tertentu (biasanya desimal). Contoh:
        Contoh konversi number ke string:
        let angka = 50;
        let teks1 = angka.toString(); // hasilnya adalah teks "50" (tipe data: string)
        let teks2 = String(angka); // hasilnya adalah teks "50" (tipe data: string)

    Kita juga dapat menggunakan tanda (+) untuk menggabungkan tipe data string dengan tipe data number. Ketika tipe data number digabungkan dengan tipe data string, maka tipe data number akan otomatis diubah menjadi tipe data string. 
        Contoh:
        let angka = 10;
        let teks1 = "Angka " + angka; // hasilnya adalah teks "Angka 10" (tipe data: string)
        let teks2 = `Angka ${angka}`; // hasilnya adalah teks "Angka 10" (tipe data: string)



*/