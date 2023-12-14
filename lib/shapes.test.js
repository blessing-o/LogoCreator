const { Circle, Triangle, Square } = require("./shapes");

describe("Shapes", () => {
  // Test to verify that the render for the Triangle class
  describe("Instantiate", () => {
    it("should return the correct text and color for the Triangle class", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
      );
    });
 });

 // Test to verify that the render for the Circle class
 describe("Instantiate", () => {
    it("should return the correct text and color for the Circle class", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="red"/>'
      );
    });
 });

 // Test to verify that the render for the Square class
 describe("Instantiate", () => {
    it("should return the correct text and color for the Square class", () => {
      const shape = new Square();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(
        '<rect x="10"  y="10" width="30" height="30" fill="yellow"/>'
      );
    });
 });

});
