

function agencyIncome (input) {
    let adultTicketPrice = Number(input[3]); //120lv
    let kidTicketNetWorth = adultTicketPrice - (adultTicketPrice * 0.7); //36lv

    let tax = Number(input[4]); //40

    let adultTicketPriceWithTax = adultTicketPrice + tax; //160lv
    let kidTicketPriceWithTax = kidTicketNetWorth + tax;//76

    let ticketsForAdults = Number(input[1]); //15
    let ticketsForKids = Number(input[2]);//5

    let sumOfAllKidTickets = ticketsForKids * kidTicketPriceWithTax;//2400
    let sumOfAllAdultTickets = ticketsForAdults * adultTicketPriceWithTax;//380

    let summery = sumOfAllKidTickets + sumOfAllAdultTickets; //2780

    let final = summery * 0.2;// 556
    let finalFinal = final.toFixed(2);

    let name = input[0]; 

    let newString = `The profit of your agency from ${name} tickets is ${finalFinal} lv.`;
    console.log(`${newString}`);


}


agencyIncome(["WizzAir", "15", "5", "120", "40"]);

//agencyIncome(["WizzAir", "60", "23", "158.96", "39.12"]);