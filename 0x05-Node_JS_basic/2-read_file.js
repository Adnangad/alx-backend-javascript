const countStudents = (pat) => {
    const fs = require("fs");
    if (!fs.existsSync(pat)) {
        throw new Error("Cannot load the database");
    }
    if (!fs.statSync(pat).isFile()) {
        throw new Error("Cannot load the database");
    }
    const fileLines = fs.readFileSync(
            pat,
            "utf-8"
        ).toString("utf-8").
            trim().
            split("\n"),
        propNames = fileLines[0].split(","),
        finalList = []
    for (let i = 0; i < fileLines.length; i++) {
        if (i === 0) {
            continue;
        }
        const valueList = fileLines[i].split(","),
            obj = {};
        propNames.forEach((value, index) => {
            obj[value] = valueList[index];
        })
        finalList.push(obj);

    }
    const sw = [],
        cs = [];
    finalList.forEach((element) => {
        if (element.field === "SWE") {
            sw.push(element.firstname);
        } else if (element.field === "CS") {
            cs.push(element.firstname);
        }
    })
    const stdObj = {};
    stdObj.CS = cs;
    stdObj.SWE = sw;
    console.log(`Number of students: ${finalList.length}`);
    for (const [
        field,
        students
    ] of Object.entries(stdObj)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(", ")}`)
    }
}
module.exports = countStudents;

