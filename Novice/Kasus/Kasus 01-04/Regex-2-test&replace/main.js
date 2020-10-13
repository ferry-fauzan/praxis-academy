function rege() {
    let state = `Belajar front end developer program sangat menyenangkan <br>`
    let cek = state.search(`front end`)
    let cek1 = state.replace(/Front end/i, `Back End`)

    document.getElementById("reg").innerHTML = cek;
    document.getElementById("rega").innerHTML = cek1;
}