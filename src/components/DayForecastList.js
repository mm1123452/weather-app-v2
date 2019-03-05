import React from 'react'
import DayForecast from './DayForecast'

const DayForecastList = props => {
  return (
    <div >
      {props.forecast.map(day => (
        <DayForecast  key={day.id} temp={day.temp} icon={day.icon} description={day.forecast} />
      ))}
    </div>
  );
}

export default DayForecastList