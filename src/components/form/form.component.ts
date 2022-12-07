import { Validator } from "./validator.component";

export class Form {
  form: HTMLFormElement;
  textFields: NodeListOf<HTMLFormElement>;
  emailFields: NodeListOf<HTMLFormElement>;
  selectFields: NodeListOf<HTMLFormElement>;
  validator: Validator;
  constructor(form: HTMLFormElement) {
    this.form = form;
    this.textFields;
    this.selectFields;
    this.validator = new Validator();
    this.render();
    this.applyHandler();
  }
  render() {
    this.textFields = this.form.querySelectorAll<HTMLFormElement>(
      "[type=text], textarea, [type=email], [type=password]"
    );
    this.selectFields = this.form.querySelectorAll<HTMLFormElement>("select");
  }
  applyHandler(): void {
    this.form.addEventListener("submit", this.onSubmit.bind(this));
  }
  onSubmit(event): void {
    event.preventDefault();
    this.textFields.forEach((input) => {
      this.validator.require(input);
    });
    this.selectFields.forEach((select) => {
      this.validator.requireSelect(select);
    });
    if (this.test()) {
      this.form.reset();
    }
  }
  test(): boolean {
    if (document.querySelectorAll(".error").length !== 0) {
      return false;
    } else {
      return true;
    }
  }
}
