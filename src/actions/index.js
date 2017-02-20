import axios from 'axios'

const API_KEY = "3ebd043775d249fbc496124b897bc719"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`
    const request = axios.get(url)
    console.log(request)
    return {
        type: 'FETCH_WEATHER',
        payload: request
    }
}