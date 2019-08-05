function reverseString(napis) {
let pobierzNapis;
let odwrocNapis;
let scalNapis;

pobierzNapis=napis.split('');
odwrocNapis =pobierzNapis.reverse();
scalNapis =odwrocNapis.join('');

return scalNapis;
}
    console.log(reverseString('Akademia108'))


