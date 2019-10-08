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

  render() {
    const forecasts = this.props.forecasts
    const detailForecast = this.state.showForecastDetailPage
      ? this.props.forecasts[this.state.selectDateIndex]
      : null
    return (
      <div className="ForecastPage">
        <header>
          <h1>Weather Forecast </h1>
          <button onClick={this.showSetLocationPage}>
            {this.props.location
              ? this.props.location.name +
                ', ' +
                this.props.location.sys.country
              : 'Set Location'}
          </button>
          <span className="refresh">
            {this.props.isFetching ? (
              <img alt="loading" src="/loading.gif" />
            ) : this.props.error ? (
              <span className="error">{this.props.error}</span>
            ) : null}{' '}
            last updated at{' '}
            {Date(this.props.lastUpdated)
              .toLocaleString()
              .substring(16, 21)}
          </span>
        </header>
        <h2>5-days forecast</h2>
        <ul>
          {forecasts ? (
            forecasts.map((forecast, index) => (
              <Forecast
                key={forecast.day}
                {...forecast}
                onClick={() => {
                  this.showForecastDetailPage(index)
                }}
              />
            ))
          ) : (
            <div className="hero">
              <h4>Hi,</h4>
              <div>
                This is a weather forecast app, you can:
                <ol>
                  <li>
                    Set a location, click button [Set Location] on top, you can
                    also change location after set a location.
                  </li>
                  <li>
                    See the 5-days forecast show in page after location set.
                  </li>
                  <li>
                    See the 3-hourly forecast for that date by clicking the day.
                  </li>
                  <li>
                    [NEW] Add auto refresh forecasts, and error catch and
                    display
                  </li>
                </ol>
              </div>
            </div>
          )}
        </ul>

        {this.state.showForecastDetailPage ? (
          <ForecastDetailPage
            date={detailForecast.day}
            forecastDetails={detailForecast.hourly}
            onClose={() => this.hideForecastDetailPage()}
          />
        ) : null}

        {this.state.showSetLocationPage ? (
          <SetLocationPage onClose={this.hideSetLocationPage} />
        ) : null}
      </div>
    )
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
