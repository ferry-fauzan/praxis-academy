let a = prompt("Masukkan nilai pertama: ");
let b = prompt("Masukkan nilai ke-2: ");

if (parseInt(a) > parseInt(b)) {
    document.write("2 nilai masukkan yang lebih besar adalah " + a);
} else if (parseInt(a) < parseInt(b)) {
    document.write("2 nilai masukkan yang lebih besar adalah " + b);
} else {
    document.write("Nilai yang anda masukkan sama");
}