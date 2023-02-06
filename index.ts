import inquirer from "inquirer";


const response = await inquirer.prompt([
    {
        name: "operand1",
        type: "number",
        message: "Kindly enter your first operand"
    },
    {
        name: "operand2",
        type: "number",
        message: "Kindly enter your second operand"
    },
    {
        name: "operation",
        type: "list",
        choices: ["+", "-", "/", "*"],
        message: "Select operation"
    },
]);

let a = response.operand1
let b = response.operand2
let c = response.operation

console.log("first input = " + a, "second input = " + b, "Enter operation '" + c + "'")

if (c === '+') {
    if (a === "" && b === "") {
        console.log("error")

    }
    else {
        console.log("You select addition = ", a + b)
    }


}
if (c === '-') {
    if (a === "" && b === "") {
        console.log("error")

    }
    else {
        console.log("You select addition = ", a - b)
    }
}
if (c === '*') {
    if (a === "" && b === "") {
        console.log("error")

    }
    else {
        console.log("You select addition = ", a * b)
    }
}
if (c === '/') {
    if (a === "" && b === "") {
        console.log("error")

    }
    else {
        console.log("You select addition = ", a / b)
    }
}