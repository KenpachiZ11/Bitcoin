import React from 'react'

fetch('https://api.coincap.io/v2/assets')
.then(res => res.json())
.then(
    (result) => {
        let resultCoin = result.data;
        for (let coin of resultCoin) {
            let names = JSON.stringify(coin.name)
            console.log(names.replace(/^"(.+(?="$))"$/, '$1'));
            let symbol = JSON.stringify(coin.symbol)
            console.log(symbol.replace(/^"(.+(?="$))"$/, '$1'));
            let priceUsd = JSON.stringify(coin.priceUsd)
            console.log(priceUsd.replace(/^"(.+(?="$))"$/, '$1'));
        }
        
    }
)
.catch(error => console.log('error', error));

export default Coins