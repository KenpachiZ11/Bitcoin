import React, { Component } from 'react'

export default class Coin extends Component {
    constructor() {
        super();
        this.state ={
            resultCoin: []
        }
    }


    componentDidMount() {
        fetch('https://api.coincap.io/v2/assets')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    resultCoin: result.data
                })
            }
        )
        .catch(error => console.log('error', error));
}

    render() {
        const {resultCoin} = this.state;
        const coin = resultCoin.map(coins => {
            return(
                <div key = {coins.id} className = 'box'>
                    <div className = 'cn'>{coins.name}</div>
                    <div className = 'cs'>{coins.symbol}</div>
                    <div className = 'cp'>{coins.priceUsd} $</div>
                    <div className = 'ce'>
                        <a href = {coins.explorer}>{coins.name}</a>
                    </div>
                </div>
            )
        })
        return (
            <div className = 'container'>
                {coin}
            </div>
        )
    }
}


