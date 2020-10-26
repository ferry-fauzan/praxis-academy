let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Ditepati');
        }, 2000)
    } else {
        setTimeout(() => {
            resolve('Tidak Ditepati')
        }, 2000)
    }

})

console.log('mulai');
janji2
    .then(response => console.log('OK ' + response))
    .catch(response => console.log('Not Ok ' + response))
console.log('Selesai')