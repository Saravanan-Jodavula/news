import React, { Component } from 'react';
/*import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
*/
import './App.css';
import 'tachyons';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f5a57418d2b54dcab228b0fe76f78118');




/*componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=f5a57418d2b54dcab228b0fe76f78118')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }
*/
/*
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=f5a57418d2b54dcab228b0fe76f78118';
var req = new Request(url);
fetch(req)
    .then(response=> response.json());

  newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => response.json());

*/
import requests	 

def NewsFromBBC(): 
	
	// BBC news api 
	main_url = " https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=4dbc17e007ab436fb66416009dfb59a8"

	// fetching data in json format 
	open_bbc_page = requests.get(main_url).json() 

	// getting all articles in a string article 
	article = open_bbc_page["articles"] 

	// empty list which will 
	// contain all trending news 
	results = [] 
	
	for ar in article: 
		results.append(ar["title"]) 
		
	for i in range(len(results)): 
		
		# printing all trending news 
		print(i + 1, results[i])				 

# Driver Code 
if __name__ == '__main__': 
	
	# function call 
	NewsFromBBC() 


function App(x) {
  return (
    <div className="App">
     <p>{response.articles[0].title}</p>
    </div>
  );
}

export default App;
