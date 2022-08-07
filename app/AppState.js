import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/BgImage').Image} */ //singular for one image
  image = {}

  /** @type {import('./Models/Todo').Todo[]} */
  todos = []

   /** @type {import('./Models/Time').Time} */ 
  time = {}

  /** @type {import('./Models/Weather').Weather} */ 
  weather = {}



}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
