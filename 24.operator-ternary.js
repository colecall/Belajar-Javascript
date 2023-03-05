/*
Ternary operator adalah operator kondisional yang memungkinkan kita untuk menulis suatu kondisi dalam satu baris kode. 
Ternary operator dikenal juga sebagai conditional operator atau ternary conditional operator.

    Format dari ternary operator adalah sebagai berikut:
    condition ? expression1 : expression2

    Penjelasan:
    condition adalah suatu ekspresi yang akan dievaluasi dan menghasilkan nilai boolean (true atau false).
    expression1 adalah ekspresi yang akan dieksekusi jika nilai condition adalah true.
    expression2 adalah ekspresi yang akan dieksekusi jika nilai condition adalah false.
    
    Contoh penggunaan ternary operator:
    const age = 25;

    const allowed = age >= 18 ? "You are allowed" : "You are not allowed";

    console.log(allowed); // Output: "You are allowed"

Pada contoh di atas, condition adalah age >= 18, yang akan menghasilkan nilai boolean true. Oleh karena itu, ekspresi yang dieksekusi adalah "You are allowed". Selain itu, kita juga bisa menuliskan ekspresi yang lebih kompleks, 
    
    seperti berikut:

    const age = 15;

    const allowed = age >= 18 ? "You are allowed" : (age >= 16 ? "You need parental consent" : "You are not allowed");

    console.log(allowed); // Output: "You need parental consent"

Pada contoh di atas, kita menuliskan kondisi yang lebih kompleks, yaitu jika age >= 18 maka "You are allowed", jika tidak maka kita periksa apakah age >= 16. Jika age >= 16 maka "You need parental consent", dan jika tidak maka "You are not allowed".

*/