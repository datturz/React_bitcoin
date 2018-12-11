import React, {
  Component
} from 'react';
import axios from 'axios'

class App extends Component {
constructor(){
  super()
  this.state ={
 movies: []
}
}
  render() {
    let klik = () => {
      let url = 'https://facebook.github.io/react-native/movies.json'
      axios.get(url)
        .then((info) => {
          this.setState({
           movies:info.data.movies
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
    let hasil = this.state.movies.map((val, i)=>{
      let id = val.id
      let nama = val.title
      let th = val.releaseYear
      return(
      <tr key={i}>
       <td>{id}</td> 
       <td>{nama}</td>
       <td>({th})</td>
       </tr>
      )
    })
    return ( 
    <div>
      <h1> INi tes </h1> 
      <button onClick = {klik}> BUTTON </button> 
      <table>
        <thead>
          <tr>
          <th>id</th>
          <th>Judul</th>
          <th>Tahun</th> 
          </tr>
        </thead>
        <tbody>
          {hasil}
        </tbody>
        
      </table>
      </div>
    );
  }
}

export default App;