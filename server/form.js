const express = require('express');

const bodyParser = express.json();
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(bodyParser);
app.use(errorhandler);
app.use(morgan('dev'));
app.use(cors);

const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('../database.sqlite');

app.post('/', (req, res, next) => {
    const task = req.body.task,
        status = req.body.status,
        section = req.body.section,
        etichetta = req.body.etichetta;
    if (!task || !status || !section || !etichetta) {
        return res.sendStatus(400)
    }
    db.run('INSERT INTO New_Task (task, status, section, etichetta) VALUES ($task, $status, $section, $etichetta)', {
        $task: task,
        $status: status,
        $section: section,
        $etichetta: etichetta
    }, function(error) {
        if (error) {
            next(error)
        } else {
            db.get('SELECT * FROM New_Task WHERE New_Task.id = $id', {
                $id: this.lastID
            }, (error, task) => {
                if (error) {
                    next(error)
                } else {
                    res.status(201).json({ task: task })
                }
            })
        }
    })
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
});