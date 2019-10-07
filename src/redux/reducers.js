import { SET_LOCATION, FETCH_FORECASTS } from './types'

const locationReducer = (state, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.data
    default:
      return state
  }
}

const forecastReducer = (state, action) => {
  switch (action.type) {
    case FETCH_FORECASTS:
      return action.data
    default:
      return state
  }
}
export const reducer = (state = {}, action) => {
  return {
    location: locationReducer(state.location, action),
    forecasts: forecastReducer(state.forecasts, action),
  }
}
