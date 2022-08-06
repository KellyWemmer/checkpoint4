import { ImageController } from "./Controllers/ImageController.js";
import { TodosController} from "./Controllers/TodosController.js"

class App {
  // valuesController = new ValuesController();

  imageController = new ImageController()

  todosController = new TodosController()//new TodosConroller is running TodosController constructor
}

window["app"] = new App();
