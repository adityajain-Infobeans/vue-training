/* eslint-disable quotes */
/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import axios from "axios";

export function getMessage() {
  return axios
    .get("http://localhost:3000/message")
    .then(response => response.data)
    .catch(error => error);
}
