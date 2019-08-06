class Ksiazka { 
constructor(autor, tytul, read) {
    this.autor=autor;
    this.tytul=tytul;
    this.read= read;


}


 opisKsiazki () {

   if (this.read==false) {
       return 'Kasiżka ma tytul"' + this.read +'", autorem jest "' 
       + this.read + '" i nie zotsała przeczytana';
   } 
   else {
       return 'Ksiazka ma tytul"' +this.read + '",autorem jest"'
       + this.read + '"i została przeczytana '}
   }

};

let k1 = new Ksiazka ('Wiedzmin','Andrzej Szpakowki', true);
let k2 = new Ksiazka ('JavaScript','Pawel Choniwko', true);
let k3 = new Ksiazka ('DragonBall Z', 'Jakiś Japonczyk',false);


let tablica =[k1,k2,k3];


let suma = 0;

function iloscRead(tablica) {
    function iloscPrzeczytanych(tablica) {
        tablica.forEach(function (elem, i) {
          console.log(elem.iloscRead());
          if (elem.read == true) {
            suma += 1
            return suma;
          }
        })
    };
    iloscRead(tablica);
console.log('Liczba przeczytanych książek: ' + suma);



// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

// Na samym końcu wyświetl w konsoli ilość przeczytanych książek

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
