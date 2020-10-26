// const axios = require('axios');

// const { default: Axios } = require("axios");

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//     .then(response => {
//         console.log(response);
//         console.log(response.data.explanation);
//     })
//     .catch(error => {
//         console.log(error);
//     });

async function call() {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        response.data.map(Element => {
            console.log(Element.)
            console.log(Element.email);
        })
    } catch (error) {
        console.error(error)
    }
}

call()