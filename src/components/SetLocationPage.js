import React, { Component } from 'react'
import Location from './Location'
import { connect } from 'react-redux'
import { setLocation } from '../redux/actions'
import api from '../api/OpenWeatherMapApi'
import { fetchForecasts } from './App'

let timeoutId = -1
class SetLocationPage extends Component {
  constructor(props) {
    super(props)
    this.state = { locations: [] }
  }

  _setLocation = location => {
    this.props.setLocation(location)
    if (!location) return
    fetchForecasts(location)
  }

  _refreshLocations(needle, noWait = false) {
    clearTimeout(timeoutId)
    if (!needle && needle.length < 3) {
      this.setState({ locations: [] })
      return
    }
    timeoutId = setTimeout(
      () =>
        api.fetchLocations(needle).then(locations => {
          this.setState({ locations })
        }),
      noWait ? 0 : 810
    )
  }

  render() {
    const location = this.props.location
      ? this.props.location.name + ', ' + this.props.location.sys.country
      : ''
    return (
      <article className="SetLocationPage modal">
        <div className="modal-content">
          <span className="close" onClick={this.props.onClose}>
            &times;
          </span>
          <h1>Set Location</h1>
          <input
            defaultValue={location}
            onChange={e => {
              e.preventDefault()
              this._refreshLocations(e.target.value.trim())
            }}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                this._refreshLocations(e.target.value.trim(), true)
              }
            }}
            autoFocus={true}
          ></input>
          {this._renderLocations()}
        </div>
      </article>
    )
  }

  _renderLocations() {
    if (!this.state.locations) return
    return (
      <ul>
        {this.state.locations.map(location => (
          <Location
            key={location.id}
            icon={location.weather[0].icon}
            location={location.name + ', ' + location.sys.country}
            coord={location.coord.lat + ', ' + location.coord.lon}
            onClick={() => {
              this._setLocation(location)
              this.props.onClose()
            }}
          />
        ))}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLocation: location => dispatch(setLocation(location)),
  }
  // fetchForecasts: forecasts => dispatch(fetchForecasts(forecasts)),
}
const mapStateToProps = state => {
  return {
    location: state.location,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetLocationPage)
