import React, { Component } from 'react';
import axios from 'axios';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f5a57418d2b54dcab228b0fe76f78118');

class Display extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: []
    };
  }

  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ url: `https://newsapi.org/v2/top-headlines?sources=${nextProps.default}&apiKey=f5a57418d2b54dcab228b0fe76f78118` });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles(url) {
    const apiKey = process.env.REACT_APP_API_KEY;
    // Make HTTP reques with Axios
    axios
      .get(`https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=f5a57418d2b54dcab228b0fe76f78118`)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
          /*  <div className="card"  key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>
            </div>        */
            ////////////////////////////////////////////////////////////////////////////////
             <div className="card" key={i} >
               <img className="image" src={news.urlToImage} alt="Card image cap"/>
                  <div className="card-body">
                      <h3 className="card-text"><a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a></h3>
                      <p className="card-text">{news.description}</p>
                      <p className="card-text">By <i>{news.author ? news.author : this.props.default}</i></p>
                      <p className="card-text">{this.formatDate(news.publishedAt)}</p>
                    </div>
              </div> 

            ///////////////////////////////////////////////////////////////////////////////
          );
        })}
      </div>
    );
  }
}

export default Display;


