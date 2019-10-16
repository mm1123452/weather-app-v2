import {hourlyToDailyForecast}  from './Util'

describe('hourlyToDailyForecast utility', () => {
  it('should receive an array of forecast for every 3 hours and return forecast for four days', () => {
   const forecastArray = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}, {},{},{},{},{},{},{},{},{},{}, {}, {}]
    
   const dailyForecastArray = hourlyToDailyForecast(forecastArray)

   const expectedArray = [{},{}, {},{}]

    expect(dailyForecastArray).toEqual(expectedArray)
  })
})