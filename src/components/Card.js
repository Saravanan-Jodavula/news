import React from 'react';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f5a57418d2b54dcab228b0fe76f78118');

    


var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=${Outlet.id}&' +
          'apiKey=f5a57418d2b54dcab228b0fe76f78118';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })






const Card = () => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='' src={} />
      <div>
        <h2>{newsHeadline}/h2>
        <p>{newsContent}</p> 
      </div>
    </div>
  );
}

export default Card;
