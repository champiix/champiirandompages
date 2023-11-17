// colorPicker.js

// Function to create a color picker and attach it to an input field
function createColorPicker(inputId) {
    const input = document.getElementById(inputId);

    // Create a color input element
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';

    // Set initial value to the input field value
    colorPicker.value = input.value;

    // Update the input field value when the color is changed
    colorPicker.addEventListener('input', function () {
        input.value = colorPicker.value;
    });

    // Append the color picker after the input field
    input.parentNode.insertBefore(colorPicker, input.nextSibling);
}

// Call the function to create a color picker for an input field with the id "colorPicker"
createColorPicker('colorPicker');
