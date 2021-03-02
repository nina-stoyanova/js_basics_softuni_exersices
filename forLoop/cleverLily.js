function cleverLily(input) {
    let lilyAge = Number(input[0]);//10years old
    let washingMachine = Number(input[1]);//170lv
    let priceOneToy = Number(input[2]);//6lv for one toy


    let toySum = 0; //sum from the sold toys through odd years - 54lv
    for (let i = 1; i <= lilyAge; i = i + 2) {//odd years 1,3,5,7,9
        toySum = priceOneToy * i;
    }

    let moneySum = 0; // sum from the money through even years - 50lv
    let lastGift = 0;
    for (let i = 2; i <= lilyAge; i = i + 2) {//even years 2,4,6,8,10
       lastGift = lastGift + 10;
         

    }
    console.log(lastSum)

    let allMoney = toySum + moneySum;

    
    

}

cleverLily(["10", "170", "6"]);