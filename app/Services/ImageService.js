import { ProxyState } from "../AppState.js";
import {BgImage} from "../Models/Image.js";
import { ImageController } from "../Controllers/ImageController.js";

class ImageService {
    async getImage() {
        let res = await axios.get('/images')
        console.log('get image response service', res)
    }
}

export const imageService = new ImageService()
