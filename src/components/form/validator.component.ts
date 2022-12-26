export class Validator {
  constructor() {}
  require(key: string): () => void {
    let element = document.querySelector<HTMLFormElement>(
      `[formControll=${key}]`
    );
    return function req() {
      if (element.value === "") {
        element.classList.add("error");
        console.log(element);
      } else {
        element.classList.remove("error");
      }
    };
  }
  pattern(key: string, pattern: string): () => void {
    let element = document.querySelector<HTMLFormElement>(
      `[formControll=${key}]`
    );
    return function req() {
      if (element.value.match(pattern)) {
        element.classList.remove("error");
      } else {
        element.classList.add("error");
      }
    };
  }
  requireSelect(key: string): () => void {
    let element = document.querySelector<HTMLFormElement>(
      `[formControll=${key}]`
    );
    return function req() {
      if (element.value > 1) {
        element.classList.remove("error");
      } else {
        element.classList.add("error");
      }
    };
  }
}
