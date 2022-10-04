const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("New req");
    res.send("Hello!");
});

app.listen(port);
console.log("Server started on port: " + port);
