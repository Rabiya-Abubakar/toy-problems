//Solution.js
function getStudentGrade() {
  // Loop indefinitely until valid input is received
  while (true) {
    // Prompt the user to enter a student mark and convert it to a number
    const mark = parseFloat(prompt("Enter student mark (between 0 and 100): "));

    // Check if the input is a valid number within the range of 0 to 100
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
      // Determine and print the grade based on the mark
      if (mark > 79) {
        console.log("Student grade: A");
        return "Grade A"; // Return grade A for marks greater than 79
      } else if (mark >= 60 && mark <= 79) {
        console.log("Student grade: B");
        return "Grade B"; // Return grade B for marks between 60 and 79 (inclusive)
      } else if (mark >= 49 && mark <= 59) {
        console.log("Student grade: C");
        return "Grade C"; // Return grade C for marks between 49 and 59 (inclusive)
      } else if (mark >= 40 && mark <= 49) {
        console.log("Student grade: D");
        return "Grade D"; // Return grade D for marks between 40 and 49 (inclusive)
      } else {
        console.log("Student grade: E");
        return "Grade E"; // Return grade E for marks less than 40
      }
    } else {
      // Inform the user of invalid input and continue the loop
      console.log("Invalid input. Please enter a mark between 0 and 100.");
    }
  }
}

// Invoke the function to start grading
getStudentGrade();

