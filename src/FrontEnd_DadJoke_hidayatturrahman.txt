import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      setup: '',
      puncline: '',
    }
  }
  componentDidMount() {
    let url = `https://safe-falls-22549.herokuapp.com/random_joke`
    axios.get(url)
      .then((info) => {
        this.setState({
          setup: info.data.setup,
          puncline: info.data.puncline,
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    let klik = () => {
      let url = `https://safe-falls-22549.herokuapp.com/random_joke`
      axios.get(url)
        .then((info) => {
          this.setState({
            setup: info.data.setup,
            puncline: info.data.punchline
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
    return (
      <React.Fragment>
        <div>
          <div class="card" style={{ backgroundColor: 'pink' }} >
            <div class="card-body">
              <h5 class="card-title">{this.state.setup}</h5>
              <p class="card-text">{this.state.puncline}</p>
              <button class="btn btn-primary" onClick={klik} style={{ marginLeft: '500px' }}>Go</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}