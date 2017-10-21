import React, { Component } from 'react'

class Search extends Component {

  constructor(){
    super()
    this.state = {
      search: {
        location: '',
        query: ''
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Search Venues</h3>
            <input type="text" placeholder="Query" /><br />
            <input type="text" placeholder="Location" /><br />
            <button>Search</button>
          </div>

          <div className="col-md-8">
            
          </div>  
        </div>
      </div>
    )
  }
}

export default Search