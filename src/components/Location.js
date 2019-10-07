import React from 'react'
import PropTypes from 'prop-types'
import { API_ICON_URI } from '../api/OpenWeatherMapApi'

const Location = ({ onClick, location, icon, coord }) => (
  <li className="Location" onClick={onClick}>
    <span>
      <h3>
        <img alt={icon} src={`${API_ICON_URI}/${icon}.png`} />
      </h3>
    </span>
    <span>
      <h4>{location}</h4>
      <h5 alt="Geo coords">[{coord}]</h5>
    </span>
  </li>
)

Location.propTypes = {
  onClick: PropTypes.func,
  location: PropTypes.string.isRequired,
}

export default Location
