const express = require('express')
const User = require('./user.schema');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    let data = foo(req);
    res.send(`hello ${data.firstName} ${data.lastName}`)
})

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