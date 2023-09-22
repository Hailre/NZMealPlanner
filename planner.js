window.addEventListener('load', () => {
    // task form
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please add a task");
            return;
        }

        //create element
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        list_el.appendChild(task_el);

        //content
        const content_el = document.createElement('div');
        content_el.classList.add('content');

        task_el.appendChild(content_el);

        const input_el = document.createElement('input');
        input_el.classList.add('text');
        input_el.type = 'text';
        input_el.value = task;
        input_el.setAttribute('readonly', 'readonly');

        content_el.appendChild(input_el);

        //actions
        const actions_el = document.createElement('div');
        actions_el.classList.add('actions');
        task_el.appendChild(actions_el);

        //add actions buttons
        const edit_btn = document.createElement('button');
        edit_btn.classList.add('edit');
        edit_btn.innerHTML = `<i class="uil uil-edit-alt"></i>`;

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete');
        delete_btn.innerHTML = `<i class="uil uil-trash"></i>`;

        actions_el.appendChild(edit_btn);
        actions_el.appendChild(delete_btn)

        //input value
        input.value = "";

        //edit

        edit_btn.addEventListener('click', () => {
            if (edit_btn.innerHTML == `<i class="uil uil-edit-alt"></i>`) {
                input_el.removeAttribute('readonly');
                input_el.focus();
                edit_btn.innerHTML = `<i class="uil uil-save"></i>`;
            } else {
                input_el.setAttribute('readonly', 'readonly');
                edit_btn.innerHTML = `<i class="uil uil-edit-alt"></i>`;
            }
        })

        //delete

        delete_btn.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })
    //date select
    var selectBox = document.getElementById("days");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue = "Monday") {
    monday = document.getElementById("mon")
    "<h2>Monday</h2>";
    }

    if (selectedValue = "Tuesday") {
        "<h2>Tuesday</h2>";
    }
    })
})
    

