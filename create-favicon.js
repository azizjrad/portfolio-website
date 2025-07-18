const fs = require("fs");
const path = require("path");

// Create a simple HTML file to help generate favicon.ico
const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Favicon Generator</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .favicon-preview {
            width: 32px;
            height: 32px;
            margin: 10px;
            border: 1px solid #ccc;
        }
        .instructions {
            margin-top: 20px;
            padding: 15px;
            background-color: #f0f0f0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Favicon Preview</h1>
    <img src="app/icon.svg" alt="Favicon" class="favicon-preview">
    <div class="instructions">
        <h3>Instructions:</h3>
        <p>1. Right-click on the icon above and save it as "favicon.ico"</p>
        <p>2. Or use an online converter like favicon.io to convert the SVG to ICO format</p>
        <p>3. Replace the existing favicon.ico in the app folder</p>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, "favicon-generator.html"), htmlContent);
console.log(
  "Favicon generator HTML created! Open favicon-generator.html in a browser."
);
