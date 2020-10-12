let consumpt = (age, perDay) => {
    let maxAge = 63;
    let total = (perDay * 365) * (maxAge - age);
    let message = `You will consumption ${total} mg cup of tea in rest of your life until ${maxAge} years <br>`
        // let message = ("Haii" + total);
    document.write(message);
}

consumpt(20, 8)
consumpt(15, 23)
consumpt(45, 50)