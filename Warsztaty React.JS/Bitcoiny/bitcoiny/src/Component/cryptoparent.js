import React, { Component } from 'react';
import CryptoChildlist from './cryptochildlist'
import axios from 'axios'




class CryptoParent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cryptolist: [],
            filterCryptolist: []


        }
    }

    getCryptoData = () => {
        axios.get('https://blockchain.info/pl/ticker')
            .then(res => {
                const cryptoData = res.data
                let lastCryptoList = this.state.cryptolist
                let cryptolistArray = []
                console.log(cryptoData)
                cryptolistArray = Object.keys(cryptoData).map(key => {
                    let cryptoObj = {};
                    cryptoObj.currency = key;
                    cryptoObj.symbol = cryptoData[key].symbol;
                    cryptoObj.buy = cryptoData[key].buy;
                    cryptoObj.sell = cryptoData[key].sell;
                    cryptoObj.lastRate = cryptoData[key].last;

                    let lastObj = lastCryptoList.find(lastObj => cryptoObj.currency === lastObj.currency);
                    if (lastObj !== undefined) {

                        if (cryptoObj.lastRate > lastObj.lastRate) {
                            cryptoObj.class = "green "
                        } 
                        else if (cryptoObj.lastRate < lastObj.lastRate) {
                            cryptoObj.class = "red"
                        } else {
                            cryptoObj.class = "blue" 
                        }
                        
                    } else {
                        cryptoObj.class = "blue"
                    }
                  

            return cryptoObj
            })
        // console.log("cryptoData", cryptoData)
        // console.log("lastCryptoList", lastCryptoList)
        // console.log("cryptolistArray", cryptolistArray)
 
        this.setState({
            cryptolist: cryptolistArray
        })
  this.filer()
    } )
    // RES NAZWA WLASNA MOZEMY NAZWAC JAK CHCEMY JEST TO Response
    .catch(err => {
       
    })
}


componentDidMount = () => {
    this.getCryptoData()
    setInterval(() => this.getCryptoData(), 5000)
}
// FUNKCJA ZA BUDOWANIE KOMPONENTU
    filer =() => { 
        let value = this.inputFiltr.value.toUpperCase().trim()
        // FUNKCJA VALUE (NAZWA FUNKCJI NIE MA ZNACZENIA ) USUWA BIALE ZNAKI ORAZ DUZE LITERY
        let filterlist = this.state.cryptolist

        filterlist=filterlist.filter((item)=> {
        return  (item.currency.search(value) !== -1)

        })

      this.setState({
          filterCryptolist :filterlist
      })

    }

render = () => {
    return (
        <div>
            <input ref={(data) => (this.inputFiltr =data )} placeholder="Waluta" onChange = {this.filer} />
            <CryptoChildlist listCryptoWalutFilter={this.state.filterCryptolist} />
        </div>

    )
}







}

export default CryptoParent