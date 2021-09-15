const newTask = document.getElementById('new_task');
const today = document.getElementById('today');
const upcoming = document.getElementById('upcoming');

const menuNewTasks = document.getElementById('list_new_task');
const menuTodayTasks = document.getElementById('list_today');
const menuUpcomingTasks = document.getElementById('list_upcoming');

const showMenu = (element) => {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    };
};

newTask.addEventListener('click', function() {
    showMenu(menuNewTasks)
});

today.addEventListener('click', function() {
    showMenu(menuTodayTasks)
});

upcoming.addEventListener('click', function() {
    showMenu(menuUpcomingTasks)
});
