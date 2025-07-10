export class Nav {
    constructor(nav_elem, clickable_elem_path) {
        this.nav_elem = nav_elem;
        this.clickable_elem_path = clickable_elem_path;
    }
    init() {
        this.setClickEvent();
        this.setSelectingClassByUrl();
    }
    setClickEvent() {
        this.nav_elem.querySelectorAll(this.clickable_elem_path).forEach((elem) => {
            elem.addEventListener("click", () => {
                this.removeSelectingClass();
                elem.classList.add("selecting");
            });
        });
    }
    removeSelectingClass() {
        this.nav_elem.querySelectorAll(this.clickable_elem_path).forEach((elem) => {
            const has_selecting_class = elem.classList.contains("selecting");
            if (has_selecting_class)
                elem.classList.remove("selecting");
        });
    }
    setSelectingClassByUrl() {
        const url = window.location.href;
        const is_requesting_section = url.includes("#");
        if (is_requesting_section) {
            this.setSelectingClass(url);
        }
        else {
            const dashboard_link = this.nav_elem.querySelector(this.clickable_elem_path);
            dashboard_link.click();
        }
    }
    setSelectingClass(req_href) {
        this.nav_elem.querySelectorAll(this.clickable_elem_path).forEach((elem) => {
            const is_required = elem.href === req_href;
            if (is_required)
                elem.classList.add("selecting");
        });
    }
}
