import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      reqinfo: {},
      kanye: {}
     };
  }
  
  componentDidMount() {
    // get ip address info
    fetch('https://json.geoiplookup.io/')
    .then(response => response.json())
    .then(data => {
      this.setState({ reqinfo : data });
    });
  }

  getQuote() {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({ kanye : data });
    });
  }

  render() { 

    let quoteText;
    // check if there is a quote already so nothing displays unless you click it.
    //if (Object.keys(this.state.kanye).length === 0 && this.state.kanye.constructor === Object)
    if (Object.keys(this.state.kanye).length === 0)
    {
      quoteText = <h1 hidden>"{this.state.kanye.quote}"<i> - Kanye West</i></h1>
    } else {
      quoteText = <h1>"{this.state.kanye.quote}"<i> - Kanye West</i></h1>
    }

    return ( 
      <section id="portfolio">

        <h1>Your Ip is:  {this.state.reqinfo.ip}</h1>
        <h1>You are located in:  {this.state.reqinfo.city}, {this.state.reqinfo.country_name}</h1>
        <h1>Your Internet Service Provider (ISP) is:  {this.state.reqinfo.isp}</h1>

        <img src="images/kanye-west1.png" Alt="Click Me" onClick={() => {this.getQuote();} } className="rotate-img"></img>
        {quoteText}

      </section>
     );
  }
}
 
export default Portfolio;

