let students = [
    ['Maya', 1, 90],
    ['Adit', 2, 87],
    ['Septa', 3, 98],
    ['Trisna', 4, 95],
    ['Kadir', 5, 88]
];

let Avgmarks = 0;


for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][2];
    var avg = (Avgmarks / students.length);

}

document.write("Average grade: " + (Avgmarks) / students.length + "<br>");

if (avg < 60) {
    document.write("Grade : F");
} else if (avg < 70) {
    document.write("Grade : D");
} else if (avg < 80) {
    document.write("Grade : C");
} else if (avg < 90) {
    document.write("Grade : B");
} else if (avg < 100) {
    document.write("Grade : A");
}