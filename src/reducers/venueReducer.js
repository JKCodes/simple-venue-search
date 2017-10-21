import constants from '../constants'

var initialState = {
  selectedVenue: null
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {

    case constants.SELECT_VENUE:
      newState['selectedVenue'] = action.data
      return newState

    default:
      return state
  }
}