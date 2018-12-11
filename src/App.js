import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Today from './Today/Today'
import Bitcoin from './Bitcoin/Bitcoin'
import Rupiah from './Rupiah/Rupiah'

export default class App extends Component {

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
      <React.Fragment>
        <center>
          <div className="container-fluid">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_kpanR-he5UsdvnxQL7ua8Fm0FNGUM4LZ4df0Mt1ADlLXFzHpw" alt="ya" />
              <br />
              <div className="card-body">
                <Link to="/bitcointoday"><button type="button" className="btn btn-warning" >Bitcoin Today</button></Link>
                <Link to="/kebitcoin"><button type="button" className="btn btn-warning">Konfersi Rupiah ke Bitcoin</button></Link>
                <Link to="/kerupiah"><button type="button" className="btn btn-warning">Konfersi Bitcoin ke Rupiah</button></Link>
              </div>
              <Route path='/bitcointoday' component={Today} />
              <Route path='/kebitcoin' component={Bitcoin} />
              <Route path='/kerupiah' component={Rupiah} />
            </div>

          </div>
        </center>
      </React.Fragment>
    );
  }
}


