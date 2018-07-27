// const bd = require('./db');
// const sendMail = require('./mail');

//Testing number
module.exports.abosulte = (number) => {
    return ((number >= 0) ? number : -number);
}

// //Testing strings
export const greet = (name) => {
    return 'Welcome ' + name;
}

// // Testing Arrays 
// export const getCurrencies = () => {
//     return ['USD', 'GBP', 'EUR'];
// }