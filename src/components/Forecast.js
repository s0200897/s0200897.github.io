import React from 'react'
import PropTypes from 'prop-types'
import { API_ICON_URI } from '../api/OpenWeatherMapApi'

const Forecast = ({
  inDetail = false,
  day,
  icon,
  conditions,
  tempMax,
  tempMin,
  wind,
  onClick,
}) => (
  <li className="Forecast" onClick={onClick}>
    <span>
      <img alt={icon} src={`${API_ICON_URI}/${icon}@2x.png`} />
    </span>

    <span>
      <h4>
        {day}, {conditions}
      </h4>
      temperature from {tempMin} to {tempMax} °С, wind {wind} m/s.
      {!inDetail ? <p>( Click to see detail forecast )</p> : null}
    </span>
  </li>
)

Forecast.propTypes = {
  onClick: PropTypes.func,
  day: PropTypes.string.isRequired,
}

export default Forecast
