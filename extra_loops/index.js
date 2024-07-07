// Solution. js
function checkSpeed() {
    // Prompt the user to enter the speed of the car
    let speed = prompt("Enter the speed of the car (in km/h):");

    // Check if the user clicked cancel or did not provide any input
    if (speed === null || speed.trim() === "") {
        console.log("No input provided.");
        return;
    }

    // Convert the input speed to a number
    speed = Number(speed);

    // Validate if the input speed is a valid number and greater than or equal to 0
    if (isNaN(speed) || speed < 0) {
        console.log("Please enter a valid speed.");
        return;
    }

    // Log the entered speed to the console
    console.log(`Entered speed: ${speed}`);

    // Define speed limits and demerit points thresholds
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    let response; // Variable to store the response message

    // Check if the speed is within the allowed limit
    if (speed <= speedLimit) {
        response = "Ok"; // If within limit, response is "Ok"
    } else {
        // Calculate demerit points for exceeding the speed limit
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Demerit Points: ${demeritPoints}`);

        // Determine the response based on demerit points
        if (demeritPoints > maxDemeritPoints) {
            response = `License suspended. Demerit Points: ${demeritPoints}`;
        } else {
            response = `Demerit Points: ${demeritPoints}`;
        }
    }

    // Log the final response to the console
    console.log("Response:", response);

    // Display an alert with the response to the user
    alert(response);
}

// Call the checkSpeed function to execute the speed checking process
checkSpeed();
