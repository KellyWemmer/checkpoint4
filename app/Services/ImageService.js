import { ProxyState } from "../AppState.js";
import {BgImage} from "../Models/Image.js";
import { ImageController } from "../Controllers/ImageController.js";
import { api } from "./AxiosService.js";

class ImageService {
    async getImage() {
        let res = await api.get('/images')
        console.log('get image response service', res)

        ProxyState.image = res.data.results
    }
}

export const imageService = new ImageService()
