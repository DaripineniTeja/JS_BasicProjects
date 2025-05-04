// Get the input display
const input = document.getElementById("input");

// Get all buttons
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            expression = "";
            input.value = "";
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else if (value === "=") {
            try {
                expression = eval(expression).toString();
                input.value = expression;
            } catch (e) {
                input.value = "Error";
                expression = "";
            }
        } else {
            expression += value;
            input.value = expression;
        }
    });
});
