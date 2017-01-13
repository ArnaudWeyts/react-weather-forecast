import 'whatwg-fetch';

const API_KEY = '31eb3b335ef92863d733e1f3b98e841a';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function FetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},be`;
  const request = fetch(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
