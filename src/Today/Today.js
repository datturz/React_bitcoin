import React, { Component } from 'react';

import axios from 'axios'

export default class Today extends Component {
    constructor() {
        super();
        this.state = {
            info: ''
        }
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

        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Mata Uang</th>
                            <th>Harga Beli Bitcoin</th>
                            <th>Harga Jual Bitcoin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dollar Australia</td>
                            <td>{this.state.info ? this.state.info.AUD.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.AUD.sell : ''}</td>
                        </tr>
                        <tr>
                            <td>Poundsterling</td>
                            <td>{this.state.info ? this.state.info.GBP.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.GBP.sell : ''}</td>
                        </tr>
                        <tr>
                            <td>Euro Eropa</td>
                            <td>{this.state.info ? this.state.info.EUR.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.EUR.sell : ''}</td>
                        </tr>
                        <tr>
                            <td>Japanes Yen</td>
                            <td>{this.state.info ? this.state.info.JPY.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.JPY.sell : ''}</td>
                        </tr>
                        <tr>
                            <td>Dolar Amerika Serikat</td>
                            <td>{this.state.info ? this.state.info.USD.buy : ''}</td>
                            <td>{this.state.info ? this.state.info.USD.sell : ''}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
