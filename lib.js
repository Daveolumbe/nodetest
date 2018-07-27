// const bd = require('./db');
// const sendMail = require('./mail');

//Testing number
module.exports.abosulte = (number) => {
    return ((number >= 0) ? number : -number);
}

// Testing strings
module.exports.greet = (name) => {
    return 'Welcome ' + name + '!';
}

// Testing Arrays 
module.exports.getCurrencies = () => {
    return ['USD', 'GBP', 'EUR'];
}

// Testing Objects 
module.exports.getProduct = (productId) => {
    return {id: productId, product: 10};
}