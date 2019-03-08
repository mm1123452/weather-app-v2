import * as Container from './WeatherFormContainer'
import * as AppActions from '../actions'
 
describe('WeatherFormContainer', () => {
  it('should dispatch getLatitudeLongitude', () => {
    const location = '10026'
    const testObj = { testDispatch: () => { } }
    
    const spyDispatch = jest.spyOn(testObj, 'testDispatch')
    const spyAction = jest.spyOn(AppActions, 'getLatitudeLongitude')
    
    Container.getGeocode(testObj.testDispatch, location)

    expect(spyDispatch).toBeCalled()
  })
})