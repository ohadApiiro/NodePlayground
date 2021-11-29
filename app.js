const express = require('express')
const User = require('./user.schema');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    let data = foo(req);
    res.send(`hello ${data.firstName} ${data.lastName}`)
})

app.post('/account', (req, res) => {
    let account = bar()
    res.send(`${account.lastName}`)
})

function bar(req) {
    let account = new AccountUserResponse(
        "Jimi",
        "Hendrix",
        "j@666.com",
        "0666",
        req.body.id
    );
    return account;
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function foo(req) {
    let user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = user.setPassword(req.body.password);
    
    console.log(`password => ${req.body.password}`);
    console.log("user =>",user);
    user.save()
    return user;
}

// pii
class AccountUserResponse {
    constructor(firstName, lastName, email, phoneNumber, userId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.userId = userId;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}