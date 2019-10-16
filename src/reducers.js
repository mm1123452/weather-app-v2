import { LATITUDE_LONGITUDE_FETCH, LATITUDE_LONGITUDE_FETCH_SUCCESS,
 LATITUDE_LONGITUDE_FETCH_FAILURE, WEATHER_FETCH,
 CURRENT_WEATHER_FETCH_SUCCESS, CURRENT_WEATHER_FETCH_FAILURE,
 FOUR_DAY_WEATHER_FETCH_SUCCESS, FOUR_DAY_WEATHER_FETCH_FAILURE} from './constants'

const initialState = {
	items: {
		location: 'Harlem',
		currentForecast: {
			temp: 32.7,
			icon: '10n',
			forecast:'Rain' ,
		},
		fourDayForecast: {
			'1': {
				id: '1',
				temp: 42.7,
				icon: '10n',
				forecast:'Windy' ,
			},
			'2': {
				id: '2',
				temp: 52.7,
				icon: '10n',
				forecast:'Spring-like' ,
			},
			'3': {
				id: '3',
				temp: 62.7,
				icon: '10n' ,
				forecast: 'Sunny',
			},
			'4': {
				id: '4',
				temp: 72.7,
				icon: '10n',
				forecast: 'clear skys',
			}		
		}	
	}

}

export const forecastReducer = (state = initialState, action) => {  
  switch (action.type) {
  	case LATITUDE_LONGITUDE_FETCH: {
  		return {
  			...state,
  			isFetching: true,
  			fetchError: null
  		}
  	}
 	case LATITUDE_LONGITUDE_FETCH_SUCCESS: {
 		const validLocation= (action.response.results.length > 0) ? true : false
 		const newLocation = validLocation ? action.response.results[0].formatted_address : state.items.location

  		return {
  			...state,
  			items: {
  			...state.items,
  			location: newLocation
  			},
  			isFetching: false,
  		}
  	}
  	case LATITUDE_LONGITUDE_FETCH_FAILURE: {
  		return {
  			...state,
  			isFetching: false,
  			fetchError: action.error.toString()
  		}
  	} 
  	case WEATHER_FETCH: {
  		return {
  			...state,
  			items: {
  				...state.items,
  				isFetchingCurrentWeather: true,
  				currentWeatherfetchError: null,
          isFetchingFourDayWeather: true,		
          fourDayWeatherfetchError: null	
  			}			
  		}
  	} 
  	case CURRENT_WEATHER_FETCH_SUCCESS: {
  		return {
  			...state,
  			items: {
  				...state.items,
  				currentForecast: {
  					...state.items.currentForecast,
  					temp: action.response.main.temp,
  					icon: action.response.weather[0].icon,
  					forecast: action.response.weather[0].main,
  				},
          isFetchingCurrentWeather: false
  			}
  		}
  	}
  	case CURRENT_WEATHER_FETCH_FAILURE: {
  		return {
  			...state,
  			items: {
  				...state.items,
          currentWeatherfetchError: action.error.toString()				
  			}
  		}
  	}
    case FOUR_DAY_WEATHER_FETCH_SUCCESS: {
      return {
        ...state,
        items: {
          ...state.items,
          fourDayForecast: {
            ...state.items.fourDayForecast,
            '1': {
              id: '1',
              temp: action.response[0].main.temp,
              forecast: action.response[0].weather[0].description,
              icon: action.response[0].weather[0].icon,
              date: action.response[0].dt_txt.slice(5,10)
            },
            '2': {
              id: '2',
              temp: action.response[1].main.temp,
              forecast: action.response[1].weather[0].description,
              icon: action.response[1].weather[0].icon,
              date: action.response[1].dt_txt.slice(5,10)
            },
            '3': {
              id: '3',
              temp: action.response[2].main.temp,
              forecast: action.response[2].weather[0].description,
              icon: action.response[2].weather[0].icon,
              date: action.response[2].dt_txt.slice(5,10)
            },
            '4': {
              id: '4',
              temp: action.response[3].main.temp,
              forecast: action.response[3].weather[0].description,
              icon: action.response[3].weather[0].icon,
              date: action.response[3].dt_txt.slice(5,10)
            }
          },
          isFetchingFourDayWeather: false
        }
      }
    }
    case FOUR_DAY_WEATHER_FETCH_FAILURE: {
      return {
        ...state,
        items: {
          ...state.items,     
          fourDayWeatherfetchError:  action.error.toString()               
        }
      }
    }
 	default:
  		return state
	}
}



