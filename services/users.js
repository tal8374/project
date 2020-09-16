const databaseHelper = require('../shared/database');

async function createUser(user) {
    databaseHelper.runQuery(`
        INSERT INTO tUsers(email, firstName, lastName, password, timestamp)
        VALUES(${user.email}, ${user.firstName}, ${user.lastName}, ${user.password}, GETDATE()) 

        --Returns the created id
        SELECT SCOPE_IDENTITY() AS userId
    `);
    return 123;
}

module.exports = {
    createUser
}