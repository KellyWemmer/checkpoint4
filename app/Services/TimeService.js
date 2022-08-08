import { ProxyState } from "../AppState.js"
import { Time } from "../Models/Time.js";
import { Todo} from "../Models/Todo.js"

class TimeService {
    getTime() {
        let today = new Date();

        let time = today.getHours() + ":" + today.getMinutes();
       
        ProxyState.time = new Time(time)
    }

    
}

export const timeService = new TimeService()