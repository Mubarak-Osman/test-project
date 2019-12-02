module.exports = {
    create: create,
    list: list,
};


var usernames = [];
var passwords = [];

// Passwords requirements:
//  * 8 characters long
//  * two numbers
//  * two special characters
function create(username, password) {
    if (username.length == 0) {
        return false;
    }

    usernames.push(username);
    passwords.push(passwords);

    return true;
}

function exists(username) {
    // Return true if an account exists.
    return false;
}

function list() {
    return usernames[0];
}
