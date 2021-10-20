const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const form = express.Router();
const db = new sqlite3.Database(process.env.TEST_DATABASE || '../database.sqlite');
form.use(express.json());
form.use(express.urlencoded({
    extended: true,
    type: "application/json"
}));

form.post('/', (req, res, next) => {
    const task = req.body.task;
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
            db.get('SELECT * FROM New_Tasks WHERE New_Tasks.id = $id', {
                $id: this.lastID
            }, (error, task) => {
                    res.status(201).json( {task: task} )
            })
        }
    }
    )
});

module.exports = form;