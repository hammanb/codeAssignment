const startingNumber = 5

const getRefrain = number => {
	return `${number} bottles of beer on the wall\n${number} bottles of beer\ntake one down, pass it around ${number - 1} bottles of beer on the wall`
}
const getEnding = () => {
	return `no more bottles of beer on the wall\nno more bottles of beer\nGo to the store, buy some more, ${startingNumber} bottles of beer on the wall`
} 

const reciteLyrics = number => {
	// exit condition
  // BH - added return to break function loop.
	if (number == 0) return console.log(getEnding())
	
	// recursive condition
	console.log(getRefrain(number))
	return reciteLyrics(number - 1)
}

reciteLyrics(startingNumber)

// Instructions: change one line to fix this function!

// Hint: you may not want to click on run
