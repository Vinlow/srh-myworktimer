
// Get a all projects
exports.getAllProjects = (req, res, database) => {
    let sqlString = "SELECT * FROM test_table WHERE active = 1";

    database.execQuery(sqlString,
        function (results) {
            res.send(JSON.stringify(results));
        }, function (error) {
            console.log(error);
            res.status(404).send({
                "msg": "Could find a project",
                "errorCode": "5.0.1"
            });
        })
}

// Get a project
exports.getProject = (req, res, database) => {
    let itemID = parseInt(req.params.id);

    if (Number.isNaN(itemID)) {
        // Return error
        res.status(400).send({
            "msg": "Could not get project",
            "errorCode": "5.1.1"
        })
    }
    else {
        itemID = database.escapeString(itemID);
        let sqlString = `SELECT * FROM test_table WHERE active = 1 AND id = ${itemID}`;

        database.execQuery(sqlString,
            function (results) {
                res.send(JSON.stringify(results));
            }, function (error) {
                console.log(error);
                res.status(404).send({
                    "msg": "Could find a project",
                    "errorCode": "5.1.2"
                });
            })
    }
}

// Create a project
exports.createProject = (req, res, database) => {
    let name = req.body.name;
    let timelimit = req.body.timelimit;

    if (name == null) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.2.1"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }

    if (timelimit == null || Number.isNaN(timelimit)) {
        let error = new Object({
            "msg": "timelimit not send",
            "errorCode": "5.2.2"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }

    let insertQuery = "INSERT INTO `test_table` (`name`, `timelimit`) VALUES (" + database.escapeString(name) + ", " + timelimit + ");";
    database.execQuery(insertQuery,
        function (results) {
            res.status(200).send({
                "msg": "Project created!"
            });
        }, function (error) {
            console.log(error);
            res.status(404).send({
                "msg": "Error while creating project",
                "errorCode": "5.2.4"
            });
        })
}

// Update a project
exports.updateProject = (req, res) => {

    let id = req.params.id;
    if (id == null || Number.isNaN(id)) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return;
    }

    // Check if project exists
    //------------------------------------------------


    //------------------------------------------------

    let name = req.body.name;
    let timelimit = req.body.timelimit;
    let duration = req.body.duration;

    if (name == null) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }

    if (timelimit == null || Number.isNaN(timelimit)) {
        let error = new Object({
            "msg": "timelimit not send",
            "errorCode": "5.3.2"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }

    if (duration == null || Number.isNaN(duration)) {
        let error = new Object({
            "msg": "duration not send",
            "errorCode": "5.2.3"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }

    res.status(200).send({ "msg": "created" })
}

exports.deleteProject = function (req, res) {
    let id = req.params.id;
    if (id == null || Number.isNaN(id)) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return;
    }

    // Check if project exists
    //------------------------------------------------


    //------------------------------------------------


    // project.active = false;
    // save to database
}