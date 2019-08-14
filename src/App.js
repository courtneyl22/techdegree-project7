import React, {Component} from 'react';
import axios from 'axios';
import apiKey from './config.js';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';

//Component Imports
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';

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
          {/* <Route path= "/" render={() => <PhotoList data={this.state.images}/>} /> */}
          <Route path= "/beach"  />
          <Route path= "/food"  />
          <Route path= "/money" />
          <Route path= "/notfound" component={NotFound} />
        </BrowserRouter>
        <div className="container">
          <h1>Gallery App!</h1>
          <SearchForm onSearch={this.performSearch} />
        </div>
          <nav className="main-nav">
            <Nav performSearch={this.performSearch}/>
          </nav>
        <div className="photo-container">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoList data={this.state.images} />
          }
        </div>
      </div>
    );
  }
    
}
