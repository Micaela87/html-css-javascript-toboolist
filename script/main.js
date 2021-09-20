// seleziona elementi h2

const tasks = document.querySelectorAll('h2');


// visualizza/nasconde liste

const showMenu = (element) => {
    element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';
};

// eventi click su h2

tasks.forEach(task => task.addEventListener('click', function() {
    showMenu(task.nextElementSibling)
}));

// seleziona elementi li

const notDone = document.querySelectorAll('li');

// converte X in spunta e viceversa

const changeSymbol = (element) => {
    element.classList.contains('not_done') ? element.classList.remove('not_done') : element.classList.add('not_done');
};

// eventi click su li

notDone.forEach(function(n) {
    n.addEventListener('click', function() {
        changeSymbol(n)
    });
});

