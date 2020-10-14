# REGULAR EXPRESSION

Regular Expression, sering ditulis/disebut juga Regex / Regexp, adalah deretan karakter spesial yang mendefinisikan sebuah pola dalam pencarian teks. Kenapa pake Regex? Regex menyederhanakan pencarian teks. Memang untuk pencarian sederhana kita bisa pake fungsi-fungsi String dan Array seperti substr(), indexOf(), slice(), dll tapi kalo pencariannya rumit, jauh lebih enak kalo pake Regex

Ada dua cara untuk bikin regex di JavaScript. Kita bisa bikin objek RegExp atau pake string biasa.

  - let re = /ab+c/;
  - let re = new RegExp('ab+c');
 
Pola penulisan ReGex adalah 
 - /<pola yang dicari>/<modifier>
 
## Modifier
JavaScript nyediain 3 modifier yang bisa kita pake yaitu :

g : global, cari semua yang cocok.
i : ignore case, huruf besar & huruf kecil sama aja
m : multiline, cari di semua baris teks, jangan berenti biarpun ketemu karakter line-break.




## Token
Token Regex dikelompokkan berdasar fungsinya. Ada yg dipake untuk definisi jenis karakter, untuk nentuin batas, dll. Daftar lengkapnya silakan baca sendiri di MDN .

Character Class : Dot (.), \d, \D, \w, \W, \s
Token dalam kelompok ini mendefinisikan jenis karakter.

Token	Artinya
.	Sebarang karakter
\d	Sebarang angka, 1 digit, 0 – 9
\D	Sebarang karakter yang bukan angka
\w	Sebarang angka atau huruf kecil & besar termasuk underscore
\W	Sebarang karakter yang bukan huruf, angka, atau underscore
\s	Karakter whitespace, spasi, tab, line-break


## Boundary / Anchor
Token boundary mendefinisikan batas awal/akhir teks yang diproses.

Token	Artinya
^	Awal baris
$	Akhir baris
\b	Batas awal / akhir kata. Antara huruf/angka dan spasi

## Quantifier
Quantifier menentukan berapa banyak karakter yang dicari.

Token	Artinya
*	0 atau lebih, sebanyak-banyaknya
+	1 atau lebih, sebanyak-banyaknya
{m,n}	minimal m , maksimal n
?	0 atau 1

## Group
Group memungkinkan kita membuat kelompok ekspresi yang akan diproses secara terpisah dari ekspresi lainnya dalam satu regex yang sama. Regex yang dijalankan dalam sebuah grup ditulis dalam tanda kurung.

Misalnya kita punya daftar file seperti ini:

hello.jpg
hello.png
dog.png
pic1.png
pic2.png
pic3a.gif
pic4.jpg
helloboy.gif



**Ferry Fauzan at Praxis Academy**