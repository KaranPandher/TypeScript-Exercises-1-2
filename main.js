// Get Date Exercise 
function getDay(day) {
    var dateGiven = new Date(day);
    switch (dateGiven.getDay()) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 0:
            return "Sunday";
            break;
    }
}
// Array of Multiples 
function arrayOfMultiples(num, length) {
    var output = [];
    var multiple = 0;
    var i;
    for (i = 1; i < length + 1; i++) {
        multiple = num * i;
        output.push(multiple);
    }
    return output;
}
// Find Smallest and Biggest Numbers 
function minMax(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    return [min, max];
}
