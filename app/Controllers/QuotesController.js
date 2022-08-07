import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js"
import { Pop } from "../Utils/Pop.js";

function _drawQuotes() {
    document.getElementById('quote').innerHTML = ProxyState.quotes.QuotesTemplate
}

export class QuotesController {
    constructor() {
        ProxyState.on('quotes', _drawQuotes)
        this.getQuotes()        
    }

    async getQuotes() {
        try {
            await quotesService.getQuotes()
        } catch (error) {
            console.error('[Get Quotes]', error)            
        }
    }
}