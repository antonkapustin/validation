import { Form } from "./components/form/form.component";
import { Validator } from "./components/form/validator.component";
import { FormData } from "./components/form/form-interface.component";
const validator = new Validator();
const pattern =
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

const form: HTMLFormElement = document.querySelector(".form");
const obj: FormData = {
  name: [validator.require("name")],
  lastname: [validator.require("lastname")],
  email: [validator.require("email"), validator.pattern("email", pattern)],
  address: [validator.require("address")],
  address2: [validator.require("address2")],
  country: [validator.requireSelect("country")],
  state: [validator.requireSelect("state")],
  zip: [validator.require("zip")],
  discription: [validator.require("discription")],
  information: [validator.require("information")],
  payment: [validator.require("payment")],
};

const constructor = new Form(obj, form);
