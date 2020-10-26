// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(response => console.log(response));

//Promise adalah event yang merepresentasikan keberhasilan atau kegagalan dimasa yang akan datang
let tepati = true;
const janji1 = new Promise((resolve, reject) => {
    if (tepati) {
        resolve('Janji ditepati')
    } else {
        reject('ingkar janji')
    }
})


console.log('Mulai');
console.log(janji1)
janji1
    .finally(() => console.log('Its annimation'))
    .then(response => console.log('Ok ' + response))
    .catch(response => console.log('Not Ok ' + response))

console.log('Mulai');