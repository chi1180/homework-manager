export class ExtensionController
{
    resize_elem: HTMLElement;
    controller_elem: HTMLElement;

    constructor(
        resize_elem: HTMLElement,
        controller_elem: HTMLElement
    ) {
        this.resize_elem = resize_elem;
        this.controller_elem = controller_elem;
    }

    init(): void {
        this.setClickEvent();
    }

    setClickEvent(): void {
        this.controller_elem.addEventListener("click", () => {
            this.resize_elem.classList.toggle("extend");
            this.changeTitle(this.controller_elem.title);
        });
    }

    changeTitle(
        title: string
    ): void {
        if (title === "extend") {
            this.controller_elem.title = "ford up";
        } else {
            this.controller_elem.title = "extend";
        }
    }
}

