let a = prompt("Pilih Angka: ");
let b = prompt("Pilih Angka: ");
let c = prompt("Pilih Angka: ");
let d = prompt("Pilih Angka: ");


if (a > b && a > c && a > d) {
    document.write("Angka Terbesar Yang Anda Masukkan: " + a);
} else if (b > a && b > c && b > d) {
    document.write("Angka Terbesar Yang Anda Masukkan: " + b);
} else if (c > a && c > b && c > d) {
    document.write("Angka Terbesar Yang Anda Masukkan: " + c);
} else if (d > a && d > b && d > c) {
    document.write("Angka Terbesar Yang Anda Masukkan: " + d);
} else {
    "Masukin Angkanya Lagi Yaa!!!"
}