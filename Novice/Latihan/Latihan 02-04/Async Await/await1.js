// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Selesai')
//         }, 2000);
//     });
// }

// async function cobaAsyn() {
//     let coba = await cobaPromise();
//     console.log(coba)
// }

// cobaAsyn();



// method try and catch
function cobaPromise() {
    return new Promise((resolve, reject) => {
        let time = 8000
        if (time < 7000) {
            setTimeout(() => {
                resolve('Selesai')
            }, 2000);
        } else {
            console.log('Suwiii')
        }
    });
}

async function cobaAsyn() {
    try {
        let coba = await cobaPromise();
        console.log(coba)
    } catch (err) {
        console.log(err)
    }
}

cobaAsyn();