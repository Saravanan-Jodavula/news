import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f5a57418d2b54dcab228b0fe76f78118');
//import logo from './images/react.svg';
//import news from './images/news.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">

          <div className="title tc">
            <h1>News App</h1>
            <h4>
           
            </h4>
          </div>

          
        </div>
        <Search default="bbc-news" />
       <Footer />
      </div>
    );
  }
}

export default App;