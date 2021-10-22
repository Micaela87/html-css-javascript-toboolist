const data = document.getElementById('data');

const url = 'http://localhost:4001/api/form';

const getLastCreatedTask = async () => {
  
    try {
      let response = await fetch(url, {
        method: 'GET'
      }).then(function(response) {
        if (response.ok) {
          return response.json();
        }
      }).then(function(task) {
        const newDiv = document.createElement('div');

        data.append(`${task.task.id}, ${task.task.task}, ${task.task.status}, ${task.task.section}, ${task.task.etichetta}`, newDiv);
        console.log(task.task)



      })
      // if (response.ok) {
      //   let jsonResponse = response.json();
      //   console.log(jsonResponse);
      // }
    }
    catch(error) {
      console.log(error);
    }
}

getLastCreatedTask()