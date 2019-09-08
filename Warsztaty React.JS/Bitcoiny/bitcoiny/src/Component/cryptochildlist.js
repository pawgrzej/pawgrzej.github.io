import React, {Component} from 'react';
import './style.css'









    
        class CryptoListChildren extends Component {

            render() {
            
            let listFiltered = this.props.listCryptoWalutFilter
           
            let currencies = listFiltered.map(crypto => {
                console.log(crypto)
            let arrow = ''
            
                if (crypto.class === "green") {
            
                    arrow = String.fromCharCode(8593); // &uarr;
            
                } else if (crypto.class === "red") {
            
                  arrow = String.fromCharCode(8595); // &darr;
            
                } else {
            
                arrow = String.fromCharCode(8596); // &harr;
            
            }
            
            
            
            return (
            
                <li key={crypto.currency} className ="list-group-item" >
            
                <span className="CryptoLabel">Last rate:</span>
            
                     &nbsp;&nbsp;&nbsp;
            
                 <span className={crypto.class + " CryptoSymbol"}>{crypto.lastRate}  {arrow}</span>
            
                    &nbsp;&nbsp;&nbsp;
            
                <span className="CryptoCurrency">{crypto.currency}</span>
            
                     &nbsp;&nbsp;&nbsp;
            
                <span className="CurrencySymbol">[{crypto.symbol}]</span>
                
                </li>
            
            )
            
            })
            
            return(
            
                <div>
            
                     <ul>
            
                    {currencies}
            
                    </ul>
            
                </div>
            
            )
            
            }
            }
            
        export default CryptoListChildren
