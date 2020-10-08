for (let a = 0; a < 101; a++) {
    if (a % 7 == 0 && a % 5 == 0) {
        document.write("Ini adalah FizzBuzz " + a + "<br>");
    } else if (a % 5 == 0) {
        document.write("Ini adalah Buzz " + a + "<br>");
    } else if (a % 3 == 0) {
        document.write("Ini adalah Fizz " + a + "<br>")
    } else {
        document.write(a + "<br>")
    }
}