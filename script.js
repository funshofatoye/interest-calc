
// Start the test array
let data = [
    {principal: 2500, time: 1.8},
    {principal: 100, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
]



function interestCalculator(interestData) {

    for (const item of interestData) {

        for (const key in item) {

            if (item.principal >= 2500 && (item.time > 1 && item.time < 3)) {
                item.rate = 3;
            } else if (item.principal >= 2500 && item.time >= 3) {
                item.rate = 4;
            } else if (item.principal < 2500 || item.time <= 1) {
                item.rate = 2;
            } else {
                item.rate = 1
            }

            item.interest = (item.principal * item.rate * item.time)/100;
            
        }
        
    }

    console.log(interestData);

    return interestData;
}

interestCalculator(data);
