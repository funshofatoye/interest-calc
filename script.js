
// Start the test array
let data = [
    {principal: 2500, time: 1.8},
    {principal: 100, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
]


// create the function to calculate rate and interest
// and add accordingly.
function interestCalculator(interestData) {

    //loop through the array
    for (const item of interestData) {

        //loop through the objects within the array
        for (const key in item) {

            if (item.principal >= 2500 && (item.time > 1 && item.time < 3)) { // if principal is less than or equal to 2500 & time is less than 3
                item.rate = 3; // add rate property to object and make it equal to 3
            } else if (item.principal >= 2500 && item.time >= 3) {  // if principal is less than or equal to 2500 & time is less than or equal to 3
                item.rate = 4; // add rate property to object and make it equal to 4
            } else if (item.principal < 2500 || item.time <= 1) { // if principal is less than 2500 & time is less than or equal to 1
                item.rate = 2; // add rate property to object and make it equal to 2
            } else { // if above conditions are false for the object
                item.rate = 1 // still add rate property to object and make it equal to 1
            }

            // add an interest property to the object and make it equal to the value
            // of the calculation - item.principal * item.rate * item.time)/100
            item.interest = (item.principal * item.rate * item.time)/100;
            
        }
        
    }

    console.log(interestData); // log array to the console

    return interestData; // return array
}

interestCalculator(data);
