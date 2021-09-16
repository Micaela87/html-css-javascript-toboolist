const newTask = document.getElementsByTagName('h2')[0];
const today = document.getElementsByTagName('h2')[1];
const upcoming = document.getElementsByTagName('h2')[2];

const menuNewTasks = document.getElementsByTagName('ul')[0];
const menuTodayTasks = document.getElementsByTagName('ul')[1];
const menuUpcomingTasks = document.getElementsByTagName('ul')[2];

const showMenu = (element) => {
    element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';
    /* if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }; */
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
