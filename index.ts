import inquirer from "inquirer"
console.log("AoA")
interface calculatortypes {
    number1: number,
    number2: number,
    operator: string,
}
async function getCalculatorInput(): Promise<calculatortypes> {
    const input = await inquirer.prompt([
        {
            type: "number",
            name: "number1",
            message: "Enter first number........",
        },
        {
            type: "number",
            name: "number2",
            message: "Enter second number........",
        },
        {
            type: "list",
            name: "operator",
            message: "Select an operator...",
            choices: ["+", "-", "*", "/","%","^"]
        },
    ])
    return input;
}

function calculator(input:calculatortypes):number {
    switch (input.operator){
        case  '+': 
        return input.number1 + input.number2;
        case "-": 
        return input.number1 - input.number2;
        case "/": 
        return input.number1 / input.number2;
        case "*": 
        return input.number1 * input.number2;
        case "%": 
        return input.number1 % input.number2;
        case "^": 
        return input.number1 ** input.number2;
        default: 
        throw new Error("Invalid operator")
    }
}

async function startCalculator(){
    const input = await getCalculatorInput();
    const result = calculator(input)
    console.log(`The result is ${result}`);
}

startCalculator()

