let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true; 
let runnerAge = 25;
if (earlyReg && runnerAge > 18) {
    raceNumber += 1000; 
};
if(earlyReg && runnerAge > 18) {
    console.log(`You will race at 9:30 your race number is ${raceNumber}.`);
} else if (!earlyReg && runnerAge > 18) {
    console.log(`You will race at 11:00 am, your raceNumber is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30 your race number is ${raceNumber}.`);
};
