import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {

    async getWeather() {
        let res = await api.get('/weather')
        console.log(res.data)
        ProxyState.weather = new Weather(res.data.main)
        console.log('Weather', ProxyState.weather)

    }

    toggleTemp() {
        ProxyState.weather.isCelsius = !ProxyState.weather.isCelsius
        ProxyState.weather = ProxyState.weather
    }

    
   

}

export const weatherService = new WeatherService()