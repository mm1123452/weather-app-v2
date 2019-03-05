
/*
state: {
	items: {
		location: 'Harlem',
		currentForecast: {
			temp: 32.7,
			icon: 'rain',
			forecast:'Rain' ,
		},
		fourDayForecast: {
			'1': {
				id: '1',
				temp: 42.7,
				icon: 'wind',
				forecast:'Windy' ,
			},
			'2': {
				id: '2',
				temp: 52.7,
				icon: 'Spring',
				forecast:'Spring-like' ,
			},
			'3': {
				id: '3',
				temp: 62.7,
				icon: 'Sun' ,
				forecast: 'Sunny',
			},
			'4': {
				id: '3',
				temp: 72.7,
				icon: 'clear',
				forecast: 'clear skys',
			}		
		},
		isFetching: false,
		error: null
	}
}
*/

/*const mockForecast = [                               
  {
    dt: 12345,
    main: {
      temp: 49.73
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear Sky',
        icon: '01n'
      }
    ],
  },
  {
    dt: 4567,
    main: {
      temp: 59.73
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n'
      }
    ],
  },
  {
    dt: 8760,
    main: {
      temp: 69.73
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d'
      }
    ],
  } 
];*/

const mockForecast = {
	items: {
		location: 'Harlem',
		currentForecast: {
			temp: 32.7,
			icon: 'rain',
			forecast:'Rain' ,
		},
		fourDayForecast: {
			'1': {
				id: '1',
				temp: 42.7,
				icon: 'wind',
				forecast:'Windy' ,
			},
			'2': {
				id: '2',
				temp: 52.7,
				icon: 'Spring',
				forecast:'Spring-like' ,
			},
			'3': {
				id: '3',
				temp: 62.7,
				icon: 'Sun' ,
				forecast: 'Sunny',
			},
			'4': {
				id: '4',
				temp: 72.7,
				icon: 'clear',
				forecast: 'clear skys',
			}		
		},
		isFetching: false,
		error: null
	}
}


export default function forecastReducer(state = {forecast: mockForecast}, action) {     
  return state
}