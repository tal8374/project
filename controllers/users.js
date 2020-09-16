const usersServices = require('../services/users');

async function createUser(req, res, next) {
    try {
        let userId = await usersServices.createUser(req.body);
        res.status(200).send({ userId: userId });
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
}

module.exports = {
    createUser
}