// Helper function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Main function to perform the operation
  function areaOfCircle(radius) {
    const area = calculateCircleArea(radius);
    return area;
  }
  
  // Example of usage:
  const circleRadius = 5;
  const circleArea = areaOfCircle(circleRadius);
  console.log(`The area of the circle is: ${circleArea}`);
  