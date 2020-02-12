import store from "../store.js";
import Value from "../Models/Value.js";

//@ts-ignore
//axios does in fact exist
let _api = axios.create({
  baseURL:"https://api.nasa.gov",
  timeout:5000
})
class ValuesService {
  getApod(){
    _api.get("planetary/apod?api_key=Fg4OkBCwtld1AM2CE9nZgiP57RXneKGHgqgur3Ki").then(res=>{let apod = new Value(res.data);
      console.log(apod);
    store.commit("values",apod)
  }).catch(error=>{console.log(error)
    });
  }
  
}

const service = new ValuesService();
export default service;
