// let a = /\d[0-9][@]/
// let b = /^[a-z]+[a-z 0-9]*\@[a-z]+[a-z 0-9]*\.[a-z]/i
let b = /^[a-z]+[0-9]*\@[a-z]*\.[a-z]/i
    // let b = /^[a-z]+[a-z 0-9]*\@/i

function cekEmail(imelInput) {
    let inpt = b.test(imelInput.value)
    if (inpt) {
        alert("Anda Memasukkan Email Yang BENAR!!!")
    } else {
        alert("Email yang anda masukkan SALAH!!!")
    }

}