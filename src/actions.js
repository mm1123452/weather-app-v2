import { LATITUDE_LONGITUDE_FETCH, LATITUDE_LONGITUDE_FETCH_SUCCESS,
 LATITUDE_LONGITUDE_FETCH_FAILURE  } from './constants'


export const getLatitudeLongitude = (payload) => {         
  return {
    type: LATITUDE_LONGITUDE_FETCH,
    payload
  }
}

export const getLatitudeLongitudeSuccess = (response, payload) => {         
  return {
    type: LATITUDE_LONGITUDE_FETCH_SUCCESS,
    payload,
    response
  }
}

export const getLatitudeLongitudeFailure = (error, payload) => {         
  return {
    type: LATITUDE_LONGITUDE_FETCH_FAILURE,
    payload,
    error
  }
}