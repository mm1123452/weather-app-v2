export const hourlyToDailyForecast = (listOfForecast) => {

	let fourDayForecast = listOfForecast.filter( (item, index) => {
		return index % 8 === 0
	})

	return fourDayForecast
}