export class Nav
{
    nav_elem: HTMLElement;
    clickable_elem_path: string;

    constructor(
        nav_elem: HTMLElement,
        clickable_elem_path: string
    ) {
        this.nav_elem = nav_elem;
        this.clickable_elem_path = clickable_elem_path;
    }

    init(): void {
        this.setClickEvent();
        this.setSelectingClassByUrl();
    }

    setClickEvent(): void {
        this.nav_elem.querySelectorAll(this.clickable_elem_path).forEach((elem: HTMLElement) => {
            elem.addEventListener("click", () => {
                this.removeSelectingClass();
                elem.classList.add("selecting");
            });
        });
    }

    removeSelectingClass(): void {
        this.nav_elem.querySelectorAll(this.clickable_elem_path).forEach((elem: HTMLElement) => {
            const has_selecting_class = elem.classList.contains("selecting");
            if (has_selecting_class) elem.classList.remove("selecting");
        });
    }

    setSelectingClassByUrl(): void {
        const url: string = window.location.href;
        const is_requesting_section = url.includes("#");

        if (is_requesting_section) {
            this.setSelectingClass(url);
        } else {
            const dashboard_link = this.nav_elem.querySelector(this.clickable_elem_path) as HTMLElement;
            dashboard_link.click();
        }
    }

    setSelectingClass(req_href: string): void {
        this.nav_elem.querySelectorAll(this.clickable_elem_path).forEach((elem: HTMLLinkElement) => {
            const is_required = elem.href === req_href;
            if (is_required) elem.classList.add("selecting");
        });
    }
}

