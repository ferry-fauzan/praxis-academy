let a = prompt("Masukkan Nilai ke-1: ");
let b = prompt("Masukkan Nilai ke-2: ");
let c = prompt("Masukkan Nilai ke-3: ");


if (a > 0 && b > 0 && c > 0) {
    alert("Haii You Get The Point");
} else if (a > 0 && b < 0 && c < 0) {
    document.write("Anda Memeasukkan nilai yang negatif");
} else if (a < 0 && b > 0 && c < 0) {
    document.write("Anda Memeasukkan nilai yang negatif");
} else if (a < 0 && b > 0 && c > 0) {
    document.write("Anda Memeasukkan nilai yang negatif");
} else {
    document.write("Anda Memeasukkan nilai yang negatif");
}