export class Validator {
  constructor() {}
  require(element: HTMLFormElement): void {
    if (element.hasAttribute("data-pattern")) {
      let regexp = element.getAttribute("data-pattern");
      if (element.value.match(regexp)) {
        element.classList.remove("error");
      } else {
        element.classList.add("error");
      }
    } else {
      if (element.value === "") {
        element.classList.add("error");
      } else {
        element.classList.remove("error");
      }
    }
  }
  requireSelect(select: HTMLFormElement): void {
    if (select.value > 1) {
      select.classList.remove("error");
    } else {
      select.classList.add("error");
    }
  }
}
