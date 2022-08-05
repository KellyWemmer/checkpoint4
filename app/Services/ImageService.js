import { ProxyState } from "../AppState.js";
import {BgImage} from "../Models/BgImage.js";
import { ImageController } from "../Controllers/ImageController.js";
import { api } from "./AxiosService.js";

class ImageService {
    async getImage() {
        let res = await api.get('/images')
        console.log('get image response service', res.data)//successful

        ProxyState.image = new BgImage(res.data)
    }
}

export const imageService = new ImageService()
