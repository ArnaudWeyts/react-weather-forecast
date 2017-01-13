import 'whatwg-fetch';

const API_KEY = '31eb3b335ef92863d733e1f3b98e841a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},be`;
  const forecast =
    fetch(url)
     .then(function(response) {
      return response.json()
    }).then(function(json) {
      return json;
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });

  return {
    type: FETCH_WEATHER,
    payload: forecast
  };
}
