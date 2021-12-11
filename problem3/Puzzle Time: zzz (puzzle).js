
function init(monday: any,saturday: any,sunday: any): void {
	const tuesday = monday
	const wednesday = tuesday
	const thursday = monday
	const friday = wednesday

	// while running this code will not result in an error,
	// there may or may not be unexpected results...

  //[saturday.length].concat(sunday)
  //The issue is a few things:
  // 1) line 6 was not closed, and the line 11 statement becomes part of the friday variable declaration. We could just add a ; to line 6, if that was the only issue
  // 2) even if we do 1), line 11 still doesn't do anything, as it is being interpreted as a statement, but the output isn't stored to the saturday variable, so we could do this: saturday = [saturday.length].concat(sunday)
  // 3) this still is strange, as it concats sunday (string) with saturday.length which is an int of 0. I'm assuming this isn't the intended output. If the intention was to do saturday = sunday, then just do that:
  saturday = sunday

	console.log("How much sleep I had:")
	console.log("Monday:", String(monday))
	console.log("Tuesday:", String(tuesday))
	console.log("Wednesday:", String(wednesday))
	console.log("Thursday:", String(thursday))
	console.log("Friday:", String(friday))
	console.log("Saturday:", String(saturday))
	console.log("Sunday:", String(sunday))
}

const {monday, saturday} = require('./mysteryFile')
const mon: string[] = monday
const sat: string[] = saturday
const sun: string[] = ["8 hours of sleep"]

init(mon, sat, sun)
