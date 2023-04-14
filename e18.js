/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const countedNames = data.asteroids.reduce((acc, obj) => {
    const currCount = acc[obj.discoveryYear] ?? 0;
    return {
      ...acc,
      [obj.discoveryYear]: currCount + 1,
    };
  }, {});

  const ArrayOfYearInstanceArray = Object.entries(countedNames); //array of array

  let year = ArrayOfYearInstanceArray[0][1];

  for (let KeyValArray of ArrayOfYearInstanceArray) {
    if (KeyValArray[1] > year) {
      console.log(KeyValArray[0]);
      year = KeyValArray[0];
    }
  }
  return Number.parseInt(year);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
