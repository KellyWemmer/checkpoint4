import { ImageController } from "./Controllers/ImageController.js";
import { TodosController} from "./Controllers/TodosController.js";
import { TimeController} from "./Controllers/TimeController.js"
import { WeatherController } from "./Controllers/WeatherController.js";
import { QuotesController } from "./Controllers/QuotesController.js";

class App {
  // valuesController = new ValuesController();

  imageController = new ImageController()

  todosController = new TodosController()//new TodosController is running TodosController constructor

  timeController = new TimeController()

  weatherController = new WeatherController()

  quotesController = new QuotesController()
}

window["app"] = new App();
