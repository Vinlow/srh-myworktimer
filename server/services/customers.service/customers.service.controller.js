
// Get a all customers
exports.getAllCustomers = (req, res) => {
    // if active = 1
    res.send("Return all items")
}

// Get a customer
exports.getCustomer = (req, res) => {
    let itemID = req.params.id;

    if (typeof itemID != 'number') {
        // Return error
        res.status(400).send({
            "msg": "Could not get customer",
            "errorCode": "5.1"
        })
    }
    else {
        // Return with filter
        // if active = 1
        res.send("Item ID: " + itemID)
    }
}

// Create a customer
exports.createCustomer = (req, res) => {
    let name = req.body.name;
    let timelimit = req.body.timelimit;
    let duration = req.body.duration;

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

// Update a customer
exports.updateCustomer = (req, res) => {

    let id = req.params.id;
    if (id == null || Number.isNaN(id)) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return;
    }

    // Check if customer exists
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

exports.deleteCustomer = function (req, res) {
    let id = req.params.id;
    if (id == null || Number.isNaN(id)) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return;
    }

    // Check if customer exists
    //------------------------------------------------


    //------------------------------------------------


    // customer.active = false;
    // save to database
}