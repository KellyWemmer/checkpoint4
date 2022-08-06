import { ImageController } from "./Controllers/ImageController.js";
import { TodosController} from "./Controllers/TodosController.js";
import { TimeController} from "./Controllers/TimeController.js"

class App {
  // valuesController = new ValuesController();

  imageController = new ImageController()

  todosController = new TodosController()//new TodosConroller is running TodosController constructor

  timeController = new TimeController()
}

window["app"] = new App();
