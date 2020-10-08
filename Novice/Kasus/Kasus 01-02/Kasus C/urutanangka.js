let a = prompt("Nilai 1: ");
let b = prompt("Nilai 2: ");
let c = prompt("Nilai 3: ");

if (a > b && a > c) {
    if (b > c) {
        document.write(a + "," + b + "," + c);
    } else {
        document.write(a + "," + c + "," + b);
    }

} else if (b > c && b > a) {
    if (c > a) {
        document.write(b + "," + c + "," + a)
    } else {
        document.write(b + "," + a + "," + c)
    }

} else if (c > b && c > a) {
    if (b > a) {
        document.write(c + "," + b + "," + a)
    } else {
        document.write(c + "," + a + "," + b)
    }

}