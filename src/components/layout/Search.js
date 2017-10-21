import React, { Component } from 'react'

class Search extends Component {

  constructor() {
    super()
    this.state = {
      search: {
        location: '',
        query: ''
      }
    }
  }

  updateSearchFilters(field, event) {
    console.log('updateSearchFilters: ' + field + ' == '+ event.target.value)
    let search = Object.assign({}, this.state.search)
    search[field] = event.target.value
    this.setState({
      search: search
    })
  }

  searchVenues() {
    console.log('searchVenues: ' + JSON.stringify(this.state.search))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Search Venues</h3>
            <input onChange={this.updateSearchFilters.bind(this, 'query')} type="text" placeholder="Query" /><br />
            <input onChange={this.updateSearchFilters.bind(this, 'location')} type="text" placeholder="Location" /><br />
            <button onClick={this.searchVenues.bind(this)}>Search</button>
          </div>

          <div className="col-md-8">
            
          </div>  
        </div>
      </div>
    )
  }
}

export default Search