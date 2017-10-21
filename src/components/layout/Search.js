import React, { Component } from 'react'
import superagent from 'superagent'

class Search extends Component {

  constructor() {
    super()
    this.state = {
      venues: [],
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

    const url = 'https://api.foursquare.com/v2/venues/search'

    const params = {
      v: '20140806',
      near: this.state.search.location,
      query: this.state.search.query,
      client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
      client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'
    }

    superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, data) => {
      if (err) {
        alert('OOPS: ' + err.message)
        return
      }

      console.log(JSON.stringify(data.body.response.venues))
      this.setState({
        venues: data.body.response.venues
      })
    })
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

            <hr />
            <h3>Venues</h3>
            <ol>
              { this.state.venues.map((venue, i) => {
                  return <li key={venue.id}>{venue.name}</li>
                })
              }
            </ol>
          </div>

          <div className="col-md-8">
            
          </div>  
        </div>
      </div>
    )
  }
}

export default Search