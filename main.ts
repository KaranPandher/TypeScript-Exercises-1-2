// Get Date Exercise 
    function getDay(day: number) {
        const dateGiven = new Date(day);
      
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
function arrayOfMultiples (num: number, length: number) {
	let output = []
    let multiple = 0
    let i:number 
	for(i = 1; i < length + 1; i++) {
		multiple = num * i
		output.push(multiple)
	}
	return output
}

// Find Smallest and Biggest Numbers 
function minMax(arr: any) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return [min, max];
  }