# String

String dalam javascript adalah sebuah tipe data yang digunakan untuk mrepresentasikan sebuah karakter.

Dalam penulisannya string dibagi menjadi 2 yaitu:

  - Object String
  
        const foo = new String('foo'); // Creates a String object
        console.log(foo); // Displays: [String: 'foo']
        typeof foo; // Returns 'object
  - String Literal
  
        'foo'
        "bar"

Dalam string kita bisa temukan berbagai macam method yang bisa kita manfaatkan
-charAt() digunakan untuk mencari index karakter yang kita inginkan
    
        const sentence = 'The quick brown fox jumps over the lazy dog.';
        const index = 4;
        
        console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
        // expected output: "The character at index 4 is q"
        
-indexOf() digunakan untuk nomer index dari string yang kita cari
    
        const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
        const searchTerm = 'dog';
        const indexOfFirst = paragraph.indexOf(searchTerm);
        
        console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
        // expected output: "The index of the first "dog" from the beginning is 40"
        console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
        // expected output: "The index of the 2nd "dog" is 52"

-startsWith() digunakan untuk mencari nilai true dan false dari nilai awalan yang kita buat atau tetapkan

        const str1 = 'Saturday night plans';
        console.log(str1.startsWith('Sat'));
        // expected output: true

        console.log(str1.startsWith('Sat', 3));
        // expected output: false

-concat() digunakan untuk menyambungkan antar 2 string yang berbeda

        const str1 = 'Hello';
        const str2 = 'World';

        console.log(str1.concat(' ', str2));
        // expected output: "Hello World"

        console.log(str2.concat(', ', str1));
        // expected output: "World, Hello"

**Ferry Fauzan by Praxis Academy**
