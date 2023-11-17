<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Picker</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Additional styles if needed */
    </style>
</head>
<body class="bg-gray-800 flex items-center justify-center h-screen">
    <div class="text-white p-8 space-y-4">
        <input type="color" id="colorPicker" class="w-full h-16" onchange="updateColorValues(this)">

        <div class="flex justify-between">
            <div id="hexValue" class="flex-1 text-center p-4 bg-gray-700">HEX: #ffffff</div>
            <div class="flex-1"></div> <!-- Empty space -->
            <div id="rgbValue" class="flex-1 text-center p-4 bg-gray-700">RGB: 255, 255, 255</div>
        </div>
    </div>

    <script>
        function updateColorValues(picker) {
            const hexValue = picker.value;
            const rgb = hexToRgb(hexValue);

            document.getElementById('hexValue').textContent = `HEX: ${hexValue.toUpperCase()}`;
            document.getElementById('rgbValue').textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
        }

        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }

        // Initialize with default color
        window.onload = () => {
            const defaultColor = '#ffffff';
            document.getElementById('colorPicker').value = defaultColor;
            updateColorValues(document.getElementById('colorPicker'));
        };
    </script>
</body>
</html>
