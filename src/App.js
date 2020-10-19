import React, { Component } from 'react';
import axios from 'axios';
import './mycss.scss';


class  App extends Component {
  state ={
    items:[]
  }
  handleClick = (imdb) => {
    alert(imdb);
  }


  componentDidMount()
  {
    // Used for calling api
//     fetch('http://www.omdbapi.com/?s=Batman&apikey=2930680a&plot=full')
//     .then(res=>res.json())
//     .then(data=>{
// this.setState({
//     isLoaded: true,
//     items: data
// });

axios.get(`http://www.omdbapi.com/?s=Batman&apikey=2930680a&plot=full`)
.then(res => {
  const items = res.data.Search;
  console.log(items);
  
  this.setState({ items });
})

  }
  render(){
    
  return (
    <div className="App">     
<h1 className="TitleBatman">Batman Movies from imdb API</h1>
<div className="banner-container">

    {this.state.items.map(
      movie => 
      <div   onClick={(e) => this.handleClick(movie.imdbID, e)} key={movie.imdbID} style={{ height:"100vh", backgroundImage: `url(${movie.Poster})`}} className="banner">
        <div className="banner-name">{movie.Title}  </div>
     </div>
     )}
</div>
    </div>
  );

}

}

export default App;
