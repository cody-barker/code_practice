/**
 * Printer
 *
 * Deliverables:
 *
 * A business wants to accept special instructions on their receipts in the form of a string. However, the printer can only printer 10 characters per line or else the text will spill over th edge.
 * Write a function that accepts a string as an argument, and prints the special instructions, such that each line is no more then 10 characters, and the lines break on words. If the word is longer than 10 characters- replace the 10th character with a hyphen and start the rest of the word on the next line.
 *
 *
 * Pseudocode:
 *
 * If the string length is greater than 10 characters, break it into 10 character lines, and return them all
 */


function printer(str) {
  // Split the string into words
  const words = str.split(" ");

  // Initialize an array to store the lines
  let lines = [];

  // Initialize a variable to track the current line
  let currentLine = "";

  // Iterate through each word
  for (const word of words) {
    // Check if adding the word to the current line would exceed the limit
    if (currentLine.length + word.length > 20) {
      // If it would, add the current line to the lines array and reset the current line
      lines.push(currentLine);
      currentLine = "";
    }

    // Add the word to the current line with a space if it's not the first word
    if (currentLine !== "") {
      currentLine += " ";
    }
    currentLine += word;
  }

  // Add the last line to the lines array
  lines.push(currentLine);

  // Print each line
  lines.forEach((line) => console.log(line));
}

printer("Please make it medium spicy. I really like it.");
