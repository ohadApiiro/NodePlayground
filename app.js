const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    foo();
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function foo() {
    let data = new Data('Kung', 'Fury', 'kungfury@fury.com', '6666666', '1666');
    console.log(`${data.firstName} ${data.lastName}`)
    return data;
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
}