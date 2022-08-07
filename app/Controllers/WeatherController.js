import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {    
    document.getElementById('weather').innerHTML = ProxyState.weather.WeatherTemplate
}

export class WeatherController {
    constructor() {
        ProxyState.on('weather', _drawWeather)        
        this.getWeather()      
    }

    async getWeather() {
        try {
            await weatherService.getWeather()            
        } catch (error) {
            console.error('[Getting Weather]', error)
            Pop.error(error)
        }
    }
}