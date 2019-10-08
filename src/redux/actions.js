import {
  SET_LOCATION,
  FETCH_FORECASTS_REQUEST,
  FETCH_FORECASTS_FAILURE,
  FETCH_FORECASTS_SUCCESS,
} from './types'

export const setLocation = location => {
  return { type: SET_LOCATION, data: location }
}

export const fetchForecastsRequest = () => {
  return { type: FETCH_FORECASTS_REQUEST }
}

export const fetchForecastsFailed = error => {
  return { type: FETCH_FORECASTS_FAILURE, error: error.toString() }
}
export const fetchForecastsSuccess = forecasts => {
  return {
    type: FETCH_FORECASTS_SUCCESS,
    data: forecasts,
    receivedAt: Date.now,
  }
}
