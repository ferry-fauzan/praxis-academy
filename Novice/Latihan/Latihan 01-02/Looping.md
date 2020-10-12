# Pengulangan menggunakan-For dan While

## For
for digunakan pada sebuah pengulangan hingga sebuah nilai itu terpenuhi

### Struktur Dasar for
```
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
 ```
 
### Contoh Kasus dengan for
```
<form name="selectForm">
  <p>
    <label for="musicTypes">Choose some music types, then click the button below:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="How many are selected?" /></p>
</form>

<script>
function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});
</script>
```

## While

### Struktur Dasar While
```
while (condition)
  statement
```

### Contoh Kasus Dengan While
```
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

**SUMMARY RESUME DAY 2**
