// const bd = require('./db');
// const sendMail = require('./mail');

//Testing number
module.exports.abosulte = (number) => {
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0;
}

// //Testing strings
// export const greet = (name) => {
//     return 'Welcome ' + name;
// }

// // Testing Arrays 
// export const getCurrencies = () => {
//     return ['USD', 'GBP', 'EUR'];
// }