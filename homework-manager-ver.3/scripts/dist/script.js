import { Nav } from "./nav.js";
import { ExtensionController } from "./extension-controller.js";
import { Homework } from "./homework.js";
const nav = document.querySelector("nav");
const clickable_elem_path = "ul>li>a";
const _Nav = new Nav(nav, clickable_elem_path);
_Nav.init();
const resize_elements = document.querySelectorAll(".section-main");
resize_elements.forEach((resize_elem) => {
    const extension_controller = resize_elem.querySelector(".extension-controller") || null;
    const can_extension = extension_controller !== null;
    if (can_extension) {
        const _ExtensionController = new ExtensionController(resize_elem, extension_controller);
        _ExtensionController.init();
    }
});
const homework_data_s = JSON.parse(localStorage.getItem("homework_data_s")) || null;
const has_homework_data_s = homework_data_s !== null;
if (has_homework_data_s) {
    const _Homework = new Homework(homework_data_s);
    _Homework.init();
}
else {
    alert("I can't found homework data!");
}
