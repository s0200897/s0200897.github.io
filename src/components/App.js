import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../redux/reducers'
import ForecastPage from './ForecastPage'
import {
  fetchForecastsRequest,
  fetchForecastsFailed,
  fetchForecastsSuccess,
} from '../redux/actions'
import api from '../api/OpenWeatherMapApi'
// import mockData from '../MockData'
import './App.css'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => (
  <Provider store={store}>
    <ForecastPage />
  </Provider>
)

let timeoutId = -1

const AUTO_REFRESH_THRESHOLD = 1000 * 60 * 1 // 10 minutes interval suggested by api doc
const _fetchForecasts = dispatch => {
  return location => {
    dispatch(fetchForecastsRequest())
    clearTimeout(timeoutId)
    api
      .fetch5DaysForecast(location.id)
      .then(json => dispatch(fetchForecastsSuccess(json)))
      .catch(error => dispatch(fetchForecastsFailed(error)))
      .finally(() => {
        timeoutId = setTimeout(
          () => fetchForecasts(location),
          AUTO_REFRESH_THRESHOLD
        )
      })
  }
}

export const fetchForecasts = _fetchForecasts(store.dispatch)
// fetchForecasts({ id: 2643743 })
export default App
