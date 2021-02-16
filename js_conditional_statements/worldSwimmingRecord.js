function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]); //10464s, 55555.67s
    let distanceInMeters = Number(input[1]);//1500m, 3017m
    let timeForOneMeterInSecods = Number(input[2]);//20s, 5.03s

    let SwamTimeInSeconds = distanceInMeters * timeForOneMeterInSecods;//30000s, 15175.51s
    
    let resistance = distanceInMeters / 15;//100, 201.133333333

    let resistanceFinal = Math.floor(resistance) * 12.5;//1250s, 2512.50

    
    let sumTime = SwamTimeInSeconds + resistanceFinal;//31250, 17688.0100000

    let difference = 0;
    if (recordInSeconds < sumTime) {
        difference = sumTime - recordInSeconds;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    } else {
        difference = sumTime + 0;
        console.log(`Yes, he succeeded! The new world record is ${difference.toFixed(2)} seconds.`);
    }
        


}

//worldSwimmingRecord(["10464","1500","20"]);
worldSwimmingRecord(["55555.67","3017","5.03"]);
