// will "beep" based on the specified amount of time that has passed. 

const processArguments = process.argv.slice(2) //extract command line arguments excluding node and script filename
const timer = function (times) {

  for (const time of times) { //iterate through provided time
    const interval = Number(time) * 1000

    if (!isNaN(interval) && interval > 0 ) { //check if interval is indeed a number and greater then 0.
      setTimeout(() => {
        console.log("beep")
      }, interval)
    }
  }
}

timer(processArguments) // call timer with the command line arguments



 