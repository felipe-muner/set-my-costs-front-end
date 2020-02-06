import moment from "moment";
import axios from "axios";
import myApi from "./myApi";

export default {
  nome: "felipe",
  getAll: () => {
    console.log(myApi);
    console.log(moment);
    console.log(axios);
  }
};
