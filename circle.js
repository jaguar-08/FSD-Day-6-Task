
class circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    getRadius() {
      return "The radius is ==>" + this.radius;
    }
  
    getColor() {
      return "the color is ==>" +this.color;
    }
  
    getArea() {
      return "the area is =>" + Math.PI * this.radius * this.radius;
    }
    getCircumference() {
      return "the Circumference is => " + 2 * Math.PI * this.radius;
    }
  }
  const circleValue = new circle(10, "blue");
  console.log(circleValue.getRadius());
  console.log(circleValue.getColor());
  console.log(circleValue.getArea());
  console.log(circleValue.getCircumference());
  