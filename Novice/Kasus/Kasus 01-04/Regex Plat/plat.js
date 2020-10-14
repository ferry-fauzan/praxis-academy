let a = /^[A-Z]{1,2}\s[0-9]{1,4}\s[A-Z]{1,3}$/
    // [A,AA,AB,AD,F,B,AG,H,L,M,NP,S,W,AE,AG,DK,DR,KB,DA,KH,KT,KU,DE,DG,PA,PB,G,K,R,AD]
function cekPlat(klik) {
    let b = a.test(klik.value)
    if (b) {
        alert("Benar !!! Plat Nomer Kendaraan Anda dari Indonesia")
    } else {
        alert("Plat Nomer Kendaraan Anda bukan dari Inodnesia")
    }
}