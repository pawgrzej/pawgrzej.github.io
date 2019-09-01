// Iportujemy pobieramy pliki w ten sposob 

import React from 'react'; 

// plikow css nie importujemy do zmiennych !!!

import './Counter.css';
// Kropka przed counter.css jest w birzacym folderze 

// tworzymy komponent counter 
// pierwsza opcja ktorej nie ma w prezentacji 
// meotda render jest obowiazkową metoda kazdego komponentu React
// Tutaj nasz counter jest rozszerzony przez extands w reack.comopnent

class Counter extends React.Component {
    constructor(props) {
        super(props);

        // this.state koniecznie inicjujemy w konstruktorze komponentu.
        this.state = {
            'initValue': 0 
        }
    }

    incrementCounter =() => {
        this.setState((prevState) => {
            return {
                initValue: prevState.initValue + 1
            }
        });

        
    }
    render() {
        return (
            <div 
            id="counter">{this.props.label} {this.props.nitValue}
             ::: stan właściwosci this.state.initValue ={this.state.initValue}
             <button onClick = {this.incrementCounter}> Dodaj do licznika</button>
            </div>
             
    )
    }

}
// Zeby uzyz gdzies naszego komponentu Counter nalzey go teraz 
// wykesportowac

export default Counter; 