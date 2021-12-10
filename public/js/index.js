const section = document.querySelectorAll('h2');
const ulCollection = document.querySelectorAll('ul');

const url = 'http://localhost:4001/api/index';

const showMenu = (element) => {
    console.log(element);
    element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';

};

const changeSymbol = async (element, id) => {
    let statusTask = element.classList.contains('not_done') ? 'done' : 'not done';
    let response = await fetch(url + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({statusTask: statusTask})
    })
    element.classList.contains('not_done') ? element.classList.remove('not_done') : element.classList.add('not_done');
};

const deleteTask = async (id) => {
    let response = await fetch(url + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        }          
    });
}

const getTasks = async () => {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let tasksToBeDisplayed = await response.json();
            tasksToBeDisplayed.section.forEach((task) => {
                const taskList = document.createElement('li');
                const buttonToDelete = document.createElement('button');
                buttonToDelete.innerHTML = 'Delete Task';
                if (task.section === 'new task') {
                    taskList.innerHTML = `${task.task} <span class="tag ${task.etichetta}">${task.etichetta}</span>`;
                    ulCollection[0].append(taskList);
                }

                if (task.section === 'today') {
                    taskList.innerHTML = `${task.task} <span class="tag ${task.etichetta}">${task.etichetta}</span>`;
                    ulCollection[1].append(taskList);
                }

                if (task.section === 'upcoming') {
                    taskList.innerHTML = `${task.task} <span class="tag ${task.etichetta}">${task.etichetta}</span>`;
                    ulCollection[2].append(taskList);
                }

                if (task.status === 'not done') {
                    taskList.classList.add('not_done');
                }

                taskList.append(buttonToDelete);

                buttonToDelete.addEventListener('click', function() {
                    deleteTask(task.id);
                })

                taskList.addEventListener('click', function() {
                    changeSymbol(taskList, task.id);
                })
            })

            section.forEach((htmlNode) => {
                htmlNode.addEventListener('click', function() {
                    showMenu(htmlNode.nextElementSibling);
                });
            })
        }
        }
      catch(error) {
        console.log(error);
      }
}

getTasks();