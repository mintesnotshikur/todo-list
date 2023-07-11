let taskName = [];
let taskDate = [];
function addTasks() {
    document.querySelector('.unfinishedTasksIndicator').innerHTML = '';
    let nameInputElement = document.querySelector('.js-name');
    let dateInputElement = document.querySelector('.js-date');

    if(nameInputElement.value && dateInputElement.value != '') {
        taskName.push(nameInputElement.value);
        taskDate.push(dateInputElement.value);
        document.querySelector('h2').style.color = "brown";
    }else {
        alert("Please enter task name and date!")
    }
    nameInputElement.value = '';
    dateInputElement.value = '';
    document.querySelector('.tasks').innerHTML = '';

    console.log(taskName, taskDate);
}
function unfinishedTasks() {
    if(taskName.length === 0 && taskDate.length === 0) {
        document.querySelector('.unfinishedTasksIndicator').innerHTML = 'There is no unfinished tasks!';
    }else {
        let final = '';
        for(let i=0; i<taskName.length; i++) {
            final = final + `<div><p>${taskName[i]}</p></div>` + `<div><p>${taskDate[i]}</p></div>` + `<button class="delete-btn">Delete</button>`;
        }
        document.querySelector('.tasks').innerHTML = final;
    }
}