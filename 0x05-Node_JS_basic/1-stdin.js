process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.on(
    "data",
    (input) => {
        process.stdout.write(`Your name is: ${input.trim()}`);
    }
);
process.stdin.on(
    "end",
    () => {
        process.stdout.write("This important software is now closing\n");
    }
)
