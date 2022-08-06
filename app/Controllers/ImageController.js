import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";
import {Pop} from "../Utils/Pop.js";

function _drawImage() {      
    document.body.style.backgroundImage = `url('${ProxyState.image.imageString}')`
    document.body.style.backgroundSize = 'cover'    
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

