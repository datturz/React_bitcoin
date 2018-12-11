import React, { Component } from 'react';
import axios from 'axios'
// import logo from './logo.svg';
// import './App.css';

export default class Bitcoin extends Component {
    state = {
        rupiah: 0,
        bitcoin: 0,
        info: ''
    }

    componentDidMount() {
        axios.get('https://blockchain.info/ticker')
            .then((info) => {
                console.log(info)
                this.setState({
                    info: info.data,
                })
            })
    }

    render() {
        let input = (e) => {
            this.setState({
                rupiah: e.target.value,
                bitcoin: this.state.info.USD.buy
            })
        }

        let konversikan = (this.state.rupiah / 14000) / (this.state.bitcoin)

        return (
            <div>
                <input type="number" onInput={input}></input>
                <h4>Rp. {this.state.rupiah}, {konversikan} BTC</h4>
            </div>
        );
    }
}


