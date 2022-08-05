import { ImageController } from "./Controllers/ImageController.js";

class App {
  // valuesController = new ValuesController();

  imageController = new ImageController()
}

window["app"] = new App();
