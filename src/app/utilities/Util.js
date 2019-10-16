export const hourlyToDailyForecast = (listOfForecast) => {

	let fourDayForecast = listOfForecast.filter( (item, index) => {
		return (index + 1) % 8 === 0
	})

	return fourDayForecast
}