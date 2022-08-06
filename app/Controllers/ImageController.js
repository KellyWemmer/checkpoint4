import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";
import {Pop} from "../Utils/Pop.js";

function _drawImage() {    
    // document.getElementById('background-img').innerHTML = ProxyState.image.BgImageTemplate
    document.body.style.backgroundImage = `url('${ProxyState.image.imageString}')`
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '100%';
    document.body.style.backgroundSize = 'cover'
    
}

export class ImageController {
    constructor () {
        this.getImageFromApi()
        // document.body.style.backgroundImage = "url('https://pixabay.com/get/gfd7b6427f5a592daff91c5b4d04d909174598194585e5c3abc8c200e60bdbfb3f38bdae5c0d0c12e31e81b8bbac9a55009f076b6edeb999491a0febdc7b0785d_1280.jpg')" 
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

