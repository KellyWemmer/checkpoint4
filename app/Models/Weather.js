export class Weather {
    constructor(data) {
        this.temp = data.temp
        this.feels_like = data.feels_like
        this.temp_min = data.temp_min
        this.temp_max = data.temp_max
        this.pressure = data.pressure
        this.humidity = data.humidity
        this.cels = Math.round((this.temp - 273.15))
        this.fahr = Math.round(((this.temp - 273.15)*1.8)+32)
        this.isCelsius = true

        // console.log("Kelvin", this.temp, "Celsius", this.cels)
        // console.log("Kelvin", this.temp, "Fahr", this.fahr)
    }

    get WeatherTemplate() { 
        return `
        <h1 class="bg-light rounded m-2 p-2" onclick="app.weatherController.toggleTemp()">${this.isCelsius == true ? this.cels +" ℃" : this.fahr + " ℉"}</h1>
        `
    }


}