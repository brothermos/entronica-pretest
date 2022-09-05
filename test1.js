//ใช้ switch case
const calculator = (a, operator, b) => {
    switch (operator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            if (b === 0) return console.log("Can't divide by 0!");
            return a / b;
            break;
    }
};

//ใส่ตัวเลข ตามด้วยเครื่องหมาย และตัวเลข
console.log(calculator(4, "/", 0));
