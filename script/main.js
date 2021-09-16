// seleziona elementi h2

const newTask = document.getElementsByTagName('h2')[0];
const today = document.getElementsByTagName('h2')[1];
const upcoming = document.getElementsByTagName('h2')[2];

// seleziona liste

const menuNewTasks = document.getElementsByTagName('ul')[0];
const menuTodayTasks = document.getElementsByTagName('ul')[1];
const menuUpcomingTasks = document.getElementsByTagName('ul')[2];

// visualizza/nasconde liste

const showMenu = (element) => {
    element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';
    /* if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }; */
};

// eventi click su h2

newTask.addEventListener('click', function() {
    showMenu(menuNewTasks)
});

today.addEventListener('click', function() {
    showMenu(menuTodayTasks)
});

upcoming.addEventListener('click', function() {
    showMenu(menuUpcomingTasks)
});

// seleziona elementi con classe not_done

const firstNotDone = document.getElementsByClassName('not_done')[0];
const secondNotDone = document.getElementsByClassName('not_done')[1];

// converte X in spunta

const removeCross = (element) => {
    element.classList.remove('not_done')
};

// eventi click su classe not_done

firstNotDone.addEventListener('click', function() {
    removeCross(firstNotDone)
});

secondNotDone.addEventListener('click', function() {
    removeCross(secondNotDone)
});