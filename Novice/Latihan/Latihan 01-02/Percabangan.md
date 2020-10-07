# Percabangan-if else dan switch

Kegunaan if-else ataupun while digunakan untuk melakukan pengulangan pada sebuah struktur.  

Struktur data dasar dalam penggunaan if adalah:
```
if (condition) {
  statement_1;
} else {
  statement_2;
}
```

Sedangkan if-else adalah
```
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
} 
```


Contoh Kasus Penggunaan if-else :
```
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
        'Enter exactly three characters. ' +
        `${document.form1.threeChar.value} is not valid.`);
    return false;
  }
}
```


# Switch
Switch statement digunakan untuk sebuah pengulangan dengan pola mencocokkan sebua nilai yang dipasang dengan nilai yang dijadikan sebuah acuan. Jika antara 2 nilai ini telah cocok maka akan menjalankan sebuah perintah yang telah ditentukan. 

Struktur dasar switch
```
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
```

Contoh penggunaan switch pada sebuah program
```
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");
```


**SUMMARY RESUME DAY 2**