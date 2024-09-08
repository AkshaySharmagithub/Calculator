let inputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText === '=') {
            try {
                string = String(eval(string)); // Convert result to a string
                inputbox.value = string;
            } catch (error) {
                inputbox.value = "Error"; // Show error for invalid expressions
            }
        } else if (b.target.innerText === 'AC') {
            string = ''; // Clear input
            inputbox.value = string;
        } else if (b.target.innerText === 'DEL') {
            string = string.substring(0, string.length - 1); // Remove last character
            inputbox.value = string;
        } else if (b.target.innerText === '±') {
            string = String(-eval(string)); // Negate the current value
            inputbox.value = string;
        } else {
            string += b.target.innerText; // Append the clicked button's text to the input
            inputbox.value = string;
        }
    });
});
