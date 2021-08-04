const express = require("express");
var cors = require('cors')
const sendMail = require('./lib/nodemailer')

const app = express();
app.use(cors())

const port = 3001;
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/sendMail", (req, res) =>{
    const { email, subject, message, name} = req.body;
    sendMail(email, subject, message, name)
    res.send('Your message is succesfully sended!')
})

app.listen(port, () => {
    console.log(`App is listening on https://localhost:${port}`)
})