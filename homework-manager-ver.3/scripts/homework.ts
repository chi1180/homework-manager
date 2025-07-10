export class Homework {
    homework_data_s: HomeworkData[];

    constructor(
        homework_data_s: HomeworkData[]
    ) {
        this.homework_data_s = homework_data_s;
    }

    init(): void {
        const homeworkListContainers: NodeListOf<HTMLUListElement> = document.querySelectorAll(".homework-list-container")
        homeworkListContainers.forEach((homeworkListContainer: HTMLUListElement) => {
            this.homework_data_s.forEach((homework_data: HomeworkData) => {
                this.setHomeworkList(homeworkListContainer, homework_data);
            });
        });
    }

    setHomeworkList(
        parent_elem: HTMLElement,
        homework_data: HomeworkData
    ): void {
        const homework_list: HTMLLIElement = document.createElement("li");
        const [head, left_contents, homework_controller_container]: HTMLDivElement[] = Array.from({length: 3}, () => document.createElement("div"));
        const label: HTMLLabelElement = document.createElement("label");
        const input: HTMLInputElement = document.createElement("input");
        const [homework_title, homework_description, homework_due_date]: HTMLParagraphElement[] = Array.from({length: 3}, () => document.createElement("p"));
        const [edit, remove, show]: HTMLSpanElement[] = Array.from({length: 3}, () => document.createElement("span"));

        input.type = "checkbox";
        input.className = "completed-check-mark";
        input.checked = homework_data.completed;
        label.appendChild(input);
        homework_title.className = "homework-title";
        homework_title.innerText = homework_data.title;
        left_contents.className = "left-contents";
        [label, homework_title].forEach(elem => left_contents.appendChild(elem));

        edit.className = "edit"
        remove.className = "remove"
        show.className = "show"
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

    setHomeworkTag(
        parent_elem: HTMLElement,
        homework_data: HomeworkData
    ): void {

    }
}

