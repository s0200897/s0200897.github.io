import { SET_LOCATION, FETCH_FORECASTS } from './types'

export const setLocation = location => {
  return { type: SET_LOCATION, data: location }
}

export const fetchForecasts = forecasts => {
  return { type: FETCH_FORECASTS, data: forecasts }
}
