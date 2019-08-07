function literowanie(lit) {
console.log(lit);


let zmienWTablice= (lit.split(''));
let posortowanie = zmienWTablice.sort();
let zmienwStringa = posortowanie.join('');

return zmienWTablice;

}

console.log(literowanie("Akademia108"))

/*Sposób Pierwszy*/





let tab = [,'a','k','a','d','e','m','i','a','1','0','8']

tab.sort();
console.log(''+tab)

/*Drugi Sposob*/


function literowanie(lit) {

let napis;
let sortowanie;
let dodaj;

 napis=lit.split('');
 sortowanie=napis.sort();
 dodaj=sortowanie.join('');


 return napis;
}

console.log(literowanie('Akademia108'))


/*Trzecie Sposob*/