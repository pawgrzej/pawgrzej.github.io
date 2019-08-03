// let global 
// function iloczyn (par1,par2,par3) {
//     let wynik = par1*par2*par3
//     return wynik;
    
// }
// global=iloczyn(2,1,3)
// console.log(global)

// let wynik = (a,b,c) =>
//  {
//     let iloczyn;
//     iloczyn=a*b*c;
//     return iloczyn;
//   }
//   console.log(wynik(5,3,4))


// if (global % 3===0){
//     console.log('nasza liczba $(global) jest podzielna przez 3')

// } else {
//     console.log ("nasza liczba $(global) nie jest podzielna przez 3")
// }









// let tab = ["jan", 'ela,', 'robert', 'michal', 'rafal']
// for ( let i= o; i < lab.lenght ; i++ ) {
//     console.log (i +1 +" " + "imie to:" + tab[i])
// }





function silniaPrzezPetle(n) {

let wynik = 1;

if (n < 0 ) {
    return "silnia od ujemnej liczy nie istnieje";

} else if ( n < 2) {
    return wynik;
}

for (n; n > 0; --n) {
    wynik = wynik * n;
}

return wynik;

}
console.log("pentla for", silniaPrzezPetle(4));



function silnia(n) {
    let wynik = 1;

    if (n < 0) {
        return "silnia od ujemnej liczy sie istnieje";
    } else if (n < 2) {
        return wynik;
    } 
    wynik = n * silnia(n-1);
    return wynik;
}
console.log("silnia", silnia(4));




















9