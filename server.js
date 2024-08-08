const express = require("express");
const path = require("path");

let app = express()
app.use("/src", express.static(path.join(__dirname, "/src")))
app.get('/*' , (req, res) => {
    res.sendFile(path.join(__dirname,"/src/public/index.html"));
})

app.listen(1234, ()=>console.log('The server port is running on 1234'))

