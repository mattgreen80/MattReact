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
    //if (Object.keys(this.state.kanye).length === 0 && this.state.kanye.constructor === Object)
    if (Object.keys(this.state.kanye).length === 0)
    {
      quoteText = <p hidden>{this.state.kanye.quote}</p>
    } else {
      quoteText = <p>{this.state.kanye.quote}</p>
    }

    return ( 
      <section id="portfolio">

        <h1>Your Ip is:  {this.state.reqinfo.ip}</h1>
        <h1>You are located in:  {this.state.reqinfo.city}, {this.state.reqinfo.country_name}</h1>
        <h1>Your Internet Service Provider (ISP) is:  {this.state.reqinfo.isp}</h1>

        <button onClick={() => {this.getQuote();} } className="button"><i className="fa fa-download"></i>Click Me</button>
        {quoteText}

      </section>
     );
  }
}
 
export default Portfolio;

