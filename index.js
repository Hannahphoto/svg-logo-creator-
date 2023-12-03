// GIVEN a command-line application that accepts user input

const inquirer = require("inquirer");

const fs = require("fs");


// / WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

function init(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: "Enter text for the logo. (Must not be more than 3 characters)",
        },
        {
            type: 'input',
            name: 'tcolor',
            message: "Enter the color of your text",
        },
        {
            type: 'list',
            name: 'shape',
            message: "Select a shape for your logo",
            choices: [
                'Circle',
                'Triangle',
                'Square',
            ]
        },
        {
            type: 'input',
            name: 'scolor',
            message: "Enter the color for your shape.",
        },
    ])
    
    .then(function(answers){
        fs.writeFile('logo.svg', answers, function(err){
            if(err){
                console.log(err);
            } else
            console.log('Generated logo.svg')
        });
        
    });
};


init();


// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered