import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './redux/reducers'
import App from './components/App'
// import mockData from '../MockData'

const store = createStore(reducer)

const WeatherApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(<WeatherApp />, document.getElementById('root'))
