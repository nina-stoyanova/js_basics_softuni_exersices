

function easterLunch (easterBread, packOfEggs, cookies) {
    
    let easterBreadPrice = Number(easterBread) * 3.2; //9.600000000000001
    let packOfEggsPrice = Number(packOfEggs) * 4.35;//8.7
    let cookiesPrice = Number(cookies) * 5.4; //16.200000000000003
    let eggsPaint = Number(packOfEggs) * 12 * 0.15;//3.5999999999999996

    let summery = easterBreadPrice + packOfEggsPrice + cookiesPrice + eggsPaint;// 38.1
    let finalSummery = summery.toFixed(2);
    
    console.log(`${finalSummery}`);


}

easterLunch("3", "2", "3");
