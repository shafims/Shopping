const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparse = require("body-parser");

const app = express();

app.use(bodyparse.json());

var corsOption = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOption));  // Allow request from all origins

app.use(express.urlencoded({
    extended: true
}));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Shafims@123',
    database: 'shopping'
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Successfully Connected to Mysql Database");
});

app.get("/getuser", (req, res) => {
    connection.query("select * from new_table", function(err, result) {
        if(err) {
            throw err;
        } else {
            console.log(result);
            res.send(result);
        }
    })
});

app.post("/senddata", (req, res) => {

    const Name = req.body.Name;
    const Mobile = req.body.Mobile;
    const Address = req.body.Address;
    const PinCode = req.body.PinCode;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const ConfirmPassword = req.body.ConfirmPassword;

    connection.query("insert into new_table(Name, Mobile, Address, PinCode, Email, Password, ConfirmPassword) values(?,?,?,?,?,?,?)", [Name,Mobile,Address,PinCode,Email,Password,ConfirmPassword], function(err, result) {
        if(err) throw err;
        console.log("Data Inserted Successfully");
        res.send(result);
    });
});




const port = process.env.PORT || 8081;

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}.`);
});
