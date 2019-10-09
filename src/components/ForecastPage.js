import React, { Component } from 'react'
import { connect } from 'react-redux'
import Forecast from './Forecast'
import ForecastDetailPage from './ForecastDetailPage'
import SetLocationPage from './SetLocationPage'

class ForecastPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSetLocationPage: false,
      showForecastDetailPage: false,
      selectDateIndex: 0,
    }
  }

  render() {
    const forecasts = this.props.forecasts

    return (
      <div className="ForecastPage">
        {this._renderHeader()}
        {forecasts ? this._render5DaysForecast(forecasts) : this._renderHero()}
        {this._renderForecastDetailPage()}
        {this._renderSetLocationPage()}
      </div>
    )
  }

  showForecastDetailPage = index => {
    this.setState({ showForecastDetailPage: true, selectDateIndex: index })
  }

  hideForecastDetailPage = () => {
    this.setState({ showForecastDetailPage: false })
  }

  showSetLocationPage = () => {
    this.setState({ showSetLocationPage: true })
  }

  hideSetLocationPage = () => {
    this.setState({ showSetLocationPage: false })
  }

  _renderHeader() {
    const { lastUpdated, isFetching, location, error } = this.props
    return (
      <header>
        <h1>Weather Forecast </h1>
        <button onClick={this.showSetLocationPage}>
          {location
            ? location.name + ', ' + location.sys.country
            : '[ Set Location ]'}
        </button>
        <span className="refresh">
          {isFetching ? (
            <img alt="loading" src="/loading.gif" />
          ) : error ? (
            <span className="error">{error}</span>
          ) : null}
          {lastUpdated ? (
            <span>
              {' '}
              last updated at{' '}
              {Date(lastUpdated)
                .toLocaleString()
                .substring(16, 21)}
            </span>
          ) : null}
        </span>
      </header>
    )
  }
  _render5DaysForecast(forecasts) {
    return (
      <div>
        <h2>5-days forecast</h2>
        <ul>
          {forecasts.map((forecast, index) => (
            <Forecast
              key={forecast.day}
              {...forecast}
              onClick={() => {
                this.showForecastDetailPage(index)
              }}
            />
          ))}
        </ul>
      </div>
    )
  }
  _renderHero() {
    return (
      <div className="hero">
        <h4>Hi,</h4>
        <div>
          This is a weather forecast app, you can:
          <ol>
            <li>
              Set a location, click button [Set Location] on top, you can also
              change location after set a location.
            </li>
            <li>See the 5-days forecast show in page after location set.</li>
            <li>
              See the 3-hourly forecast for that date by clicking the day.
            </li>
            <li>
              [NEW] Add auto refresh forecasts, and error catch and display
            </li>
          </ol>
        </div>
      </div>
    )
  }

  _renderForecastDetailPage() {
    if (!this.state.showForecastDetailPage) return null
    const detailForecast = this.props.forecasts[this.state.selectDateIndex]

    return (
      <ForecastDetailPage
        date={detailForecast.day}
        forecastDetails={detailForecast.hourly}
        onClose={() => this.hideForecastDetailPage()}
      />
    )
  }

  _renderSetLocationPage() {
    if (!this.state.showSetLocationPage) return null
    return <SetLocationPage onClose={this.hideSetLocationPage} />
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    isFetching: state.forecasts.isFetching,
    lastUpdated: state.forecasts.lastUpdated,
    error: state.forecasts.error,
    forecasts: state.forecasts.items,
  }
}

export default connect(mapStateToProps)(ForecastPage)
