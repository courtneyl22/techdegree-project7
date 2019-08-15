//imports
import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';
import './index.css';

//importing API key
import apiKey from './config.js';

//Component Imports
import SearchForm from './Components/SearchForm';
import Gallery from './Components/Gallery';
import Nav from './Components/Nav';

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }

  performSearch = (query = 'poodle') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=${query}&extras=url_o`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
        this.setState({
          loading: false
        })
    });
  }

  componentDidMount() {
    this.performSearch()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <h1>Gallery App!</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>

          {/* Routes */}
          <Switch>
          <Route path= "/" />
          <Route path= "/beach"  render={(props)=> <Gallery {...props} data= {this.state.images}/>} />
          <Route path= "/food"  render={(props)=> <Gallery {...props} data= {this.state.images}/>}  />
          <Route path= "/money" render={(props)=> <Gallery {...props} data= {this.state.images}/>}  />
          </Switch>

          <Nav performSearch={this.performSearch}/>
        </BrowserRouter>
        <div className="photo-container">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <Gallery data={this.state.images} />
          }
        </div>
      </div>
    );
  } 
}
