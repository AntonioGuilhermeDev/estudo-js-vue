const button = document.querySelector('.add-task');
const input = document.querySelector('.input-task');
const fullList = document.querySelector('.task-list');

let itemList = [];

function addTask() {
    itemList.push({
        task: input.value,
        completed: false
    });
    input.value = '';
    showTask();
}

function showTask() {

    let newLi = ''

    itemList.forEach((item, index) => {

     newLi = newLi + `
         
       <li class="tasks ${item.finished && "done"}">
              <img src="img/check.png" alt="checked" onclick="finishTask(${index})">
              <p>${item.task}</p>
              <img src="img/trash-bin.png" alt="lixo" onclick="deleteItem(${index})">
       </li>
           
       `
    })
    fullList.innerHTML = newLi;

    localStorage.setItem('list', JSON.stringify(itemList));
}

function finishTask(index){
    itemList[index].finished = !itemList[index].finished;
    showTask()
}

function deleteItem(index){
    itemList.splice(index, 1);
    showTask();
}

function reloadTask(){
    const localStorageTask = localStorage.getItem('list');

    itemList = JSON.parse(localStorageTask);
    showTask();
}

reloadTask();
button.addEventListener('click', addTask);
