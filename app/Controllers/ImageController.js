import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";
import {Pop} from "../Utils/Pop.js";

function _drawImage() {
    let template = ''

    // ProxyState.image.forEach(i => template += i.BgImageTemplate)

    document.getElementById('background-img').innerHTML = template


    // document.getElementById('background-img').innerHTML = ProxyState.image.BgImageTemplate        
}

export class ImageController {
    constructor () {
        this.getImageFromApi() 
        ProxyState.on('image', _drawImage)   
    }
    async getImageFromApi() {
        try {
            await imageService.getImage()
        } catch (error) {
            console.error('[getting Image in controller]', error) 
            Pop.error(error) 

            
        }
        
    }        
        
    }   

