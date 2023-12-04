//Part 1: Refactoring Old Code
/*
This will output an array of objects representing the rows in the original CSV data set. Each object will have keys corresponding to the headers ("ID", "Name", "Occupation", "Age") and values from the respective cells in each row.
*/

// Example CSV string
const csvString1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to parse and log CSV data
function parseCSV(csvString) {
  // Split the CSV string into rows
  const rows = csvString.split("\n");

  // Get the header row and split it into an array
  const header = rows[0].split(",");

  // Initialize an array to store the objects
  const result = [];

  // Iterate through rows starting from index 1 (skipping the header)
  for (let i = 1; i < rows.length; i++) {
    // Split the row into cells using a comma
    const cells = rows[i].split(",");

    // Create an object for the current row
    const rowObject = {};

    // Iterate through cells and add them to the object with corresponding header keys
    for (let j = 0; j < cells.length; j++) {
      rowObject[header[j]] = cells[j];
    }

    // Add the object to the result array
    result.push(rowObject);
  }

  // Log the array of objects
  console.log(result);
}

// Test the function with the original CSV string
parseCSV(csvString1);


//Part 2:  Expanding Functionality
/*
This code dynamically calculates the number of columns based on the length of the header row. It then creates a two-dimensional array (result) where each row is represented as an array, and all rows are stored in a parent array. The result is logged to the console, and the two-dimensional array is cached in the result variable for later use.
*/

// Example CSV string
const csvString1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to parse and log CSV data
function parseCSV(csvString) {
  // Split the CSV string into rows
  const rows = csvString.split("\n");

  // Get the header row and split it into an array
  const header = rows[0].split(",");

  // Declare a variable to store the number of columns
  const numColumns = header.length;

  // Initialize a two-dimensional array to store the results
  const result = [];

  // Iterate through rows starting from index 1 (skipping the header)
  for (let i = 1; i < rows.length; i++) {
    // Split the row into cells using a comma
    const cells = rows[i].split(",");

    // Create an array for the current row
    const rowArray = [];

    // Iterate through cells and add them to the array
    for (let j = 0; j < numColumns; j++) {
      rowArray.push(cells[j]);
    }

    // Add the row array to the result array
    result.push(rowArray);
  }

  // Add the header row to the beginning of the result array
  result.unshift(header);

  // Cache the two-dimensional array for later use
  console.log(result);
}

// Test the function with the original CSV string
parseCSV(csvString1);


//Part 3 Transforming Data 

/*
The transformCSV function uses the previously defined parseCSV function to obtain the two-dimensional array of rows. It then creates objects for each row, with keys converted to lowercase for consistency. The resulting array of objects is logged to the console and can be returned for further use if needed.
*/

// Example CSV string
const csvString1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to transform CSV data into objects
function transformCSV(csvString) {
  // Parse CSV data and store it in a two-dimensional array
  const result = parseCSV(csvString);

  // Extract the header row from the result array
  const header = result[0];

  // Initialize an array to store objects
  const objectsArray = [];

  // Iterate through rows starting from index 1 (skipping the header)
  for (let i = 1; i < result.length; i++) {
    // Create an object for the current row
    const rowObject = {};

    // Iterate through columns and add key-value pairs to the object
    for (let j = 0; j < header.length; j++) {
      // Convert keys to lowercase for consistency
      const key = header[j].toLowerCase();
      const value = result[i][j];

      // Add key-value pair to the object
      rowObject[key] = value;
    }

    // Add the object to the objectsArray
    objectsArray.push(rowObject);
  }

  // Log the array of objects
  console.log(objectsArray);

  // Return the array of objects for potential further use
  return objectsArray;
}

// Test the function with the original CSV string
transformCSV(csvString1);


//Part 3:  Sorting and Manipulating Data
/*
The manipulateData function takes the array of objects produced in Part 3, manipulates it according to the specified tasks, logs the modified array, and calculates the average age of the group using a loop.
*/

// Example CSV string
const csvString1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to transform CSV data into objects
function transformCSV(csvString) {
  // Parse CSV data and store it in a two-dimensional array
  const result = parseCSV(csvString);

  // Extract the header row from the result array
  const header = result[0];

  // Initialize an array to store objects
  const objectsArray = [];

  // Iterate through rows starting from index 1 (skipping the header)
  for (let i = 1; i < result.length; i++) {
    // Create an object for the current row
    const rowObject = {};

    // Iterate through columns and add key-value pairs to the object
    for (let j = 0; j < header.length; j++) {
      // Convert keys to lowercase for consistency
      const key = header[j].toLowerCase();
      const value = result[i][j];

      // Add key-value pair to the object
      rowObject[key] = value;
    }

    // Add the object to the objectsArray
    objectsArray.push(rowObject);
  }

  // Log the array of objects
  console.log(objectsArray);

  // Return the array of objects for potential further use
  return objectsArray;
}

// Function to manipulate and sort the array of objects
function manipulateData(csvString) {
  // Transform CSV data into objects
  const objectsArray = transformCSV(csvString);

  // Sort the array of objects based on the "id" property
  objectsArray.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  // Remove the last element from the sorted array
  objectsArray.pop();

  // Insert an object at index 1
  const objectToInsert = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  objectsArray.splice(1, 0, objectToInsert);

  // Add an object to the end of the array
  const objectToAdd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  objectsArray.push(objectToAdd);

  // Log the modified array of objects
  console.log(objectsArray);

  // Calculate the average age of the group
  let totalAge = 0;
  for (let i = 0; i < objectsArray.length; i++) {
    totalAge += parseInt(objectsArray[i].age);
  }
  const averageAge = totalAge / objectsArray.length;

  // Log the average age
  console.log("Average Age:", averageAge);

  // Return the array of objects for potential further use
  return objectsArray;
}

// Test the function with the original CSV string
manipulateData(csvString1);


//Part 5:  Full Circle 
/*
Creativity is in the clarity, modularity and structure of the data.  The code is divided into separate functions, each with a specific responsibility. The functions transformCSV, manipulateData, and objectsToCSV are designed to be reusable. Leveraging these array methods provides concise and expressive ways to handle arrays and strings, contributing to code clarity. The code dynamically transforms object keys to lowercase during the CSV-to-object transformation for consistency. 
*/

// Example CSV string
const csvString1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to transform CSV data into objects
function transformCSV(csvString) {
  // Parse CSV data and store it in a two-dimensional array
  const result = parseCSV(csvString);

  // Extract the header row from the result array
  const header = result[0];

  // Initialize an array to store objects
  const objectsArray = [];

  // Iterate through rows starting from index 1 (skipping the header)
  for (let i = 1; i < result.length; i++) {
    // Create an object for the current row
    const rowObject = {};

    // Iterate through columns and add key-value pairs to the object
    for (let j = 0; j < header.length; j++) {
      // Convert keys to lowercase for consistency
      const key = header[j].toLowerCase();
      const value = result[i][j];

      // Add key-value pair to the object
      rowObject[key] = value;
    }

    // Add the object to the objectsArray
    objectsArray.push(rowObject);
  }

  // Log the array of objects
  console.log(objectsArray);

  // Return the array of objects for potential further use
  return objectsArray;
}

// Function to manipulate and sort the array of objects
function manipulateData(csvString) {
  // Transform CSV data into objects
  const objectsArray = transformCSV(csvString);

  // Sort the array of objects based on the "id" property
  objectsArray.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  // Remove the last element from the sorted array
  objectsArray.pop();

  // Insert an object at index 1
  const objectToInsert = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  objectsArray.splice(1, 0, objectToInsert);

  // Add an object to the end of the array
  const objectToAdd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  objectsArray.push(objectToAdd);

  // Log the modified array of objects
  console.log(objectsArray);

  // Calculate the average age of the group
  let totalAge = 0;
  for (let i = 0; i < objectsArray.length; i++) {
    totalAge += parseInt(objectsArray[i].age);
  }
  const averageAge = totalAge / objectsArray.length;

  // Log the average age
  console.log("Average Age:", averageAge);

  // Return the array of objects for potential further use
  return objectsArray;
}

// Function to transform objects back into CSV format
function objectsToCSV(objectsArray) {
  // Extract the header from the first object
  const header = Object.keys(objectsArray[0]);

  // Create an array to store rows
  const rows = [];

  // Iterate through objects and transform them into rows
  for (let i = 0; i < objectsArray.length; i++) {
    const values = Object.values(objectsArray[i]);
    rows.push(values.join(","));
  }

  // Combine header and rows into a single CSV string
  const csvString = [header.join(","), ...rows].join("\n");

  // Log the CSV string
  console.log(csvString);

  // Return the CSV string for potential further use
  return csvString;
}

// Test the full circle transformation with the original CSV string
const finalCSVString = objectsToCSV(manipulateData(csvString1));

