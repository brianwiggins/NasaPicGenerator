import ValuesService from "../Services/ValuesService.js";
import store from "../store.js";

//Private
function _draw() {
  let values = store.State.values;
  document.getElementById("desc").innerHTML=values.Template;
  document.querySelector("body").style.backgroundImage=`url(${values.hdurl})`
}

//Public
export default class ValuesController {
  constructor() {
    store.subscribe("values", _draw);
    this.getApod();
  }

  getApod(){
    ValuesService.getApod();
  }
}
