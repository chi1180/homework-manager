export class ExtensionController {
    constructor(resize_elem, controller_elem) {
        this.resize_elem = resize_elem;
        this.controller_elem = controller_elem;
    }
    init() {
        this.setClickEvent();
    }
    setClickEvent() {
        this.controller_elem.addEventListener("click", () => {
            this.resize_elem.classList.toggle("extend");
            this.changeTitle(this.controller_elem.title);
        });
    }
    changeTitle(title) {
        if (title === "extend") {
            this.controller_elem.title = "ford up";
        }
        else {
            this.controller_elem.title = "extend";
        }
    }
}
