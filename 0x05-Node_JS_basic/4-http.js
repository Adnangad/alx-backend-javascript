const http = require("http"),
    app = http.createServer((req, resp) => {
        resp.setHeader(
            "Content-Type",
            "text/plain"
        );
        resp.end("Hello Holberton School!");
    }),
    PORT = 1245;
app.listen(
    PORT,
    () => {
    }
);
module.exports = app;
