import {
  SET_LOCATION,
  FETCH_FORECASTS_REQUEST,
  FETCH_FORECASTS_FAILURE,
  FETCH_FORECASTS_SUCCESS,
} from './types'

const locationReducer = (state, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.data
    default:
      return state
  }
}

const forecastReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FORECASTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isInvalidate: false,
      }
    case FETCH_FORECASTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isInvalidate: false,
        error: action.error,
      }
    case FETCH_FORECASTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isInvalidate: false,
        items: action.data,
        error: null,
        lastUpdated: action.receivedAt,
      }
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
