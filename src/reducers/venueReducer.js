import constants from '../constants'

var initialState = {
  selectedVenue: null
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {

    default:
      return state
  }
}