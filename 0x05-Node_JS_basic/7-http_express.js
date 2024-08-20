const express = require("express"),

    app = express(),
    PORT = 1245,
    pat = process.argv[2];
function countStudents (databasePath) {
    return new Promise((resolve, reject) => {
        const fs = require("fs");
        fs.readFile(
            databasePath,
            "utf-8",
            (error, data) => {
                if (error) {
                    reject(new Error("Cannot load the database"));

                    return;
                }
                const lines = data.split("\n").filter((line) => line.trim() !== "");
                if (lines.length < 2) {
                    reject(new Error("Cannot load the database"));

                    return;
                }
                lines.shift();
                const studentsByField = {};
                let totalStudents = 0;
                lines.forEach((line) => {
                    const [firstname, , , field] = line.split(",");
                    if (field) {
                        if (!studentsByField[field]) {
                            studentsByField[field] = [];
                        }
                        studentsByField[field].push(firstname);
                        totalStudents += 1;
                    }
                });

                let output = `Number of students: ${totalStudents}\n`;
                for (const field in studentsByField) {
                    const studentList = studentsByField[field].join(", ");
                    output += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentList}\n`;
                }

                resolve(output.trim());
            }
        );
    });
}

app.get(
    "/",
    (_, res) => {
        res.send("Hello Holberton School!");
    }
);
app.get(
    "/students",
    (_, res) => {
        countStudents(pat).
            then((output) => {
                res.send(`This is the list of our students\n${output}`);
            }).
            catch((error) => {
                res.send(`This is the list of our students\n${error.message}`);
            });
    }
);
app.listen(
    PORT,
    () => {
        console.log(`Server is listening on port ${PORT}`);
    }
);

module.exports = app;
