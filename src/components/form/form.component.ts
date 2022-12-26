import { FormData } from "./form-interface.component";

export class Form {
  data: FormData;
  form: HTMLFormElement;
  constructor(data: FormData, form: HTMLFormElement) {
    this.data = data;
    this.form = form;
    this.render();
    this.applyHandler();
  }
  render() {}
  applyHandler(): void {
    this.form.addEventListener("submit", this.onSubmit.bind(this));
  }
  onSubmit(): void {
    event.preventDefault();
    let keys = Object.values(this.data);
    keys.forEach((item) => {
      item.forEach((el) => {
        el.call(this);
      });
    });
  }
}
