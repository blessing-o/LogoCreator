const Svg = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");
const inquirer = require("inquirer");

const createSvg = ({ text, textColor, shape, shapeColor }) => {
  let svg = new Svg();
  svg.setText(text, textColor);
  let inputShape = "";

  switch (shape.toLowerCase().trim()) {
    case "triangle":
      inputShape = new Triangle();
      inputShape.setColor(shapeColor);
      break;
    case "square":
      inputShape = new Square();
      inputShape.setColor(shapeColor);
      break;
    case "circle":
      inputShape = new Circle();
      inputShape.setColor(shapeColor);

    default:
      break;
  }
  
  svg.setShape(inputShape);
  console.log(svg.render());
  return svg.render();
};

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the text?",
        name: "text",
      },
      {
        type: "input",
        message: "What is color of the text",
        name: "textColor",
      },

      {
        type: "list",
        message: "What is the shape?",
        name: "shape",
        choices: ["triangle", "square", "circle"],
      },

      {
        type: "input",
        message: "What is the color of shape?",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      const svgPage = createSvg(answers);

      fs.writeFile("Logo.svg", svgPage, (err) =>
        err ? console.log(err) : console.log("Successfully created Logo.svg!")
      );
    });
}

init();
