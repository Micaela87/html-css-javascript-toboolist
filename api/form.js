const express = require('express');
const sqlite3 = require('sqlite3');

const form = express.Router();
const db = new sqlite3.Database('database.sqlite');

form.get('/', (req, res, next) => {
    db.get('SELECT * FROM New_Tasks ORDER BY id DESC LIMIT 1', (error, task) => {
        if (error) {
            next(error)
        } else {
            res.status(200).json({ task: task });
            console.log(task)
        }
    })
})

form.post('/', (req, res, next) => {
    const task = req.body.task;
    console.log(req.body);
    const status = req.body.status;
    const section = req.body.section;
    const tag = req.body.tag;
    db.run('INSERT INTO New_Tasks (task, status, section, etichetta) VALUES ($task, $status, $section, $tag)',
            {
                $task: task,
                $status: status,
                $section: section,
                $tag: tag
            }, function(error) {
                if (error) {
                    next(error);
                } else {
                    res.redirect('http://localhost:4001/confirmation.html')
                }
            }
        );
});

module.exports = form;