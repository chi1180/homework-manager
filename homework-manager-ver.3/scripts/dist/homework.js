export class Homework {
    constructor(homework_data_s) {
        this.homework_data_s = homework_data_s;
    }
    init() {
        const homeworkListContainers = document.querySelectorAll(".homework-list-container");
        homeworkListContainers.forEach((homeworkListContainer) => {
            this.homework_data_s.forEach((homework_data) => {
                this.setHomeworkList(homeworkListContainer, homework_data);
            });
        });
    }
    setHomeworkList(parent_elem, homework_data) {
        const homework_list = document.createElement("li");
        const [head, left_contents, homework_controller_container] = Array.from({ length: 3 }, () => document.createElement("div"));
        const label = document.createElement("label");
        const input = document.createElement("input");
        const [homework_title, homework_description, homework_due_date] = Array.from({ length: 3 }, () => document.createElement("p"));
        const [edit, remove, show] = Array.from({ length: 3 }, () => document.createElement("span"));
        input.type = "checkbox";
        input.className = "completed-check-mark";
        input.checked = homework_data.completed;
        label.appendChild(input);
        homework_title.className = "homework-title";
        homework_title.innerText = homework_data.title;
        left_contents.className = "left-contents";
        [label, homework_title].forEach(elem => left_contents.appendChild(elem));
        edit.className = "edit";
        remove.className = "remove";
        show.className = "show";
        homework_controller_container.className = "homework-controller-container";
        [edit, remove, show].forEach(elem => homework_controller_container.appendChild(elem));
        head.className = "head";
        [left_contents, homework_controller_container].forEach(elem => head.appendChild(elem));
        homework_description.className = "homework-description";
        homework_description.innerText = homework_data.description;
        homework_due_date.className = "homework-due-date";
        homework_due_date.innerText = homework_data["due-date"];
        homework_list.className = "homework-list";
        [head, homework_description, homework_due_date].forEach(elem => homework_list.appendChild(elem));
        parent_elem.appendChild(homework_list);
    }
    setHomeworkTag(parent_elem, homework_data) {
    }
}
