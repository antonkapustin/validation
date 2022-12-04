export class Form {
  form: HTMLFormElement;
  textFields: NodeListOf<HTMLInputElement>;
  emailFields: NodeListOf<HTMLInputElement>;
  selectFields: NodeListOf<HTMLSelectElement>;
  constructor(form: HTMLFormElement) {
    this.form = form;
    this.textFields;
    this.emailFields;
    this.selectFields;
    this.render();
    this.applyHandler();
  }
  render() {
    this.textFields = this.form.querySelectorAll<HTMLInputElement>(
      "[type=text], textarea"
    );
    this.emailFields =
      this.form.querySelectorAll<HTMLInputElement>("[type=email]");
    this.selectFields = this.form.querySelectorAll<HTMLSelectElement>("select");
  }
  applyHandler() {
    this.form.addEventListener("submit", this.onSubmit.bind(this));
  }
  onSubmit(event) {
    event.preventDefault();
    this.notToBeEmpty();
  }
  notToBeEmpty() {
    this.textFields.forEach((element) => {
      if (element.value === "") {
        element.setCustomValidity("must not to be empty");
        this.form.addEventListener("change", () => {
          element.setCustomValidity("");
          this.form.removeEventListener("change", () => {});
        });
      }
    });
  }
}
