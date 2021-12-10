const express = require('express');
const sqlite3 = require('sqlite3');

const index = express.Router();
const db = new sqlite3.Database('database.sqlite');

index.get('/', (req, res, next) => {
    db.all('SELECT * FROM New_Tasks', (err, section) => {
        if (err) {
            next(err)
        } else {
            res.status(200).json({ section: section })
        }
    })
});

index.delete('/:id', (req, res, next) => {
    let taskId = req.params.id;
    db.run('DELETE FROM New_Tasks WHERE id = $id', {
        $id: taskId
    }, (err, res) => {
        if (err) {
            next(err)
        } else {
            console.log('task deleted');
            // res.sendStatus(200);
        }
    })
});

index.put('/:id', (req, res, next) => {
    let taskId = req.params.id;
    let newStatus = req.body.statusTask;
    console.log(newStatus);
    db.run("UPDATE New_Tasks SET status = $status WHERE id = $id", {
        $id: taskId,
        $status: newStatus
    }, (err, res) => {
        if (err) {
            next(err)
        } else {
            console.log('task updated');
        }
    })
})

module.exports = index;