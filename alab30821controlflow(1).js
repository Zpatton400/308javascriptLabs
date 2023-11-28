//Part 1: Growing Pains

// Constants
const PI = 3.1415;
const radius = 5;
const maxCapacity = PI * radius * radius / 0.8; // Maximum capacity of the garden

/**
 * Function to control plant growth based on the number of weeks
 * @param {number} weeks - Number of weeks to simulate plant growth
 * @returns {number} - Final plant count after the given number of weeks
 */
function plantGrowthControl(weeks) {
    let plantCount = 20;

    for (let i = 1; i <= weeks; i++) {
        // Double the plant count every week
        plantCount *= 2;

        // Calculate the current percentage of the maximum capacity
        const currentPercentage = (plantCount / maxCapacity) * 100;

        // Control flow based on conditions
        if (currentPercentage > 80) {
            console.log(`Week ${i}: Prune the plants to control growth. Current count: ${plantCount}`);
        } else if (currentPercentage >= 50 && currentPercentage <= 80) {
            console.log(`Week ${i}: Monitor the plant growth. Current count: ${plantCount}`);
        } else {
            console.log(`Week ${i}: Plant more plants. Current count: ${plantCount}`);
        }
    }

    // Return the final plant count after the given number of weeks
    console.log(`Final plant count after ${weeks} weeks: ${plantCount}`);
    return plantCount;
}

// Testing the function with different week values
console.log("Testing with 1 week:", plantGrowthControl(1));

console.log("Testing with 2 weeks:", plantGrowthControl(2));

console.log("Testing with 3 weeks:", plantGrowthControl(3));


//Part 2: Thinking Bigger

// Calculate additional space required if 100 plants are grown for 10 weeks without pruning
const finalPlantCount = plantGrowthControl(10);
const additionalSpaceRequired = finalPlantCount - 20; // Assuming the initial count was 20
console.log(`Additional space required after 10 weeks: ${additionalSpaceRequired}`);

// Calculate the radius of the expanded garden if it remains circular
const expandedMaxCapacity = PI * radius * radius / 0.8; // Maximum capacity after 10 weeks
const expandedRadius = Math.sqrt(expandedMaxCapacity / PI);
console.log(`Radius of the expanded garden: ${expandedRadius}`);


//Part 3: Errors in Judgement

// Function to simulate plant growth and handle errors
function simulatePlantGrowth() {
    try {
        // Testing the function with different week values
        console.log("Testing with 1 week:", plantGrowthControl(1));

        console.log("Testing with 2 weeks:", plantGrowthControl(2));

        console.log("Testing with 3 weeks:", plantGrowthControl(3));

        // Calculate additional space required if 100 plants are grown for 10 weeks without pruning
        const finalPlantCount = plantGrowthControl(10);
        const additionalSpaceRequired = finalPlantCount - 20; // Assuming the initial count was 20

        // Check if the space required exceeds the available space
        if (additionalSpaceRequired > maxCapacity) {
            throw new Error("Error: Insufficient space to accommodate plant growth.");
        }

        console.log(`Additional space required after 10 weeks: ${additionalSpaceRequired}`);

        // Check if the original garden can accommodate 100 plants
        if (plantGrowthControl(0) < 100) {
            throw new Error("Error: Original garden cannot accommodate 100 plants.");
        }

        // Calculate the radius of the expanded garden if it remains circular
        const expandedMaxCapacity = PI * radius * radius / 0.8; // Maximum capacity after 10 weeks
        const expandedRadius = Math.sqrt(expandedMaxCapacity / PI);
        console.log(`Radius of the expanded garden: ${expandedRadius}`);
    } catch (error) {
        console.error(error.message);
    }
}

// Call the function to simulate plant growth and handle errors
simulatePlantGrowth();
