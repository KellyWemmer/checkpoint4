import { ProxyState } from "../AppState.js";
import { Quotes } from "../Models/Quote.js";
import { api } from "./AxiosService.js";

class QuotesService {
    async getQuotes() {
        const res = await api.get('/quotes')
        console.log(res.data)
        ProxyState.quotes = new Quotes(res.data)
    }
}

export const quotesService = new QuotesService()

