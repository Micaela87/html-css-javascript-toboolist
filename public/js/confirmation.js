const taskData = document.getElementById('data');

const url = 'http://localhost:4001/api/form';

const getLastCreatedTask = async () => {
  
    try {

      let response = await fetch(url);
      if (response.ok) {
        let latestTask = await response.json();
        taskData.innerHTML = `<li>Ultimo task aggiunto: ${latestTask.task.task}</li>
        <li>Status task: ${latestTask.task.status}</li>
        <li>Sezione task: ${latestTask.task.section}</li>
        <li>Etichetta task: ${latestTask.task.etichetta}</li>`;
      }

    } catch(error) {
      console.log(error);
    }
}

getLastCreatedTask();