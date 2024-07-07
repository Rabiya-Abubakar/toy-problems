// Solution.js
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        const pi = Math.PI;
        let volume = pi * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4); // Ensure volume is rounded to 4 decimal places
    }
}

// Example usage:
const radius = 5;
const height = 10;

const myCylinder = new Cylinder(radius, height);
const volume = myCylinder.calculateVolume();

console.log(`Volume of the cylinder: ${volume}`); // Output volume with 4 decimal places
