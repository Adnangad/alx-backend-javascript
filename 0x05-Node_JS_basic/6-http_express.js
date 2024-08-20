const express = require("express"),
    app = express(),
    PORT = 1245;
app.get(
    "/",
    (req, resp) => {
        resp.send("Hello Holberton School!");
    }
).listen(
    PORT,
    () => {
        console.log(`Listening at local host port ${PORT}`);
    }
)
module.exports = app;
