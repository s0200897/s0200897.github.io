import React from 'react'
import PropTypes from 'prop-types'
import Forecast from './Forecast'

const ForecastDetailPage = ({ date, forecastDetails, onClose }) => (
  <article className="ForecastDetailPage modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <h1>3-hourly forecast ({date})</h1>
      <ul>
        {forecastDetails.map(forecast => (
          <Forecast key={forecast.day} {...forecast} inDetail={true} />
        ))}
      </ul>
    </div>
  </article>
)

ForecastDetailPage.propTypes = {
  forecastDetails: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  date: PropTypes.string.isRequired,
}

export default ForecastDetailPage
