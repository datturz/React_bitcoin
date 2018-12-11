import React, { Component } from 'react';
import axios from 'axios'
// import logo from './logo.svg';
// import './App.css';

export default class Rupiah extends Component {
    state = {
        dolar: 0,
        bitcoin: 0,
        info: ''
    }

    componentDidMount() {
        axios.get('https://blockchain.info/ticker')
            .then((ambil) => {
                console.log(ambil)
                this.setState({
                    info: ambil.data,
                })
            })
    }

    render() {
        let input = (e) => {
            this.setState({
                bitcoin: e.target.value,
                dolar: this.state.info.USD.buy
            })
        }

        let konversi = (this.state.dolar * 14000) * this.state.bitcoin

        return (
            <div>
                <input type="number" onInput={input}></input>
                <h4>BTC {this.state.bitcoin}, Rp. {konversi}</h4>
            </div>
        );
    }
}


