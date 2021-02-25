function hotelRoom (input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let studio;//50
    let apartment;//65
    let discountStudio;//47.5
    let discountApartment;
    let finalPriceStudio;//712.15
    let finalPriceApartment;

    switch (month) {
        case "May": 
        case "Oktomber": 
            studio = 50;
            apartment = 65;
        if (nightsCount > 7 && nightsCount < 14) {
            discountStudio = studio - (studio / 100 * 5);
            finalPriceStudio = discountStudio * nightsCount;
            finalPriceApartment = apartment * nightsCount;
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
             
        } else if (nightsCount >= 14){
            discountStudio = studio - (studio / 100 * 30);
            discountApartment = apartment - (apartment / 100 * 10);
            finalPriceStudio = discountStudio * nightsCount;
            finalPriceApartment = discountApartment * nightsCount;
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
        } else {
            finalPriceApartment = studio * nightsCount;
            finalPriceApartment = apartment * nightsCount;
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
        }
        break;
        case "June": 
        case "September": 
            studio = 75.20;
            apartment = 68.70;
        if (nightsCount >= 14) {
            discountStudio = studio - (studio / 100 * 20);
            discountApartment = apartment - (apartment / 100 * 10);
            finalPriceStudio = discountStudio * nightsCount;
            finalPriceApartment = discountApartment * nightsCount;
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
        } else {
            finalPriceApartment = studio * nightsCount;
            finalPriceApartment = apartment * nightsCount;
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
        }
        break;
        case "July":
        case "August": 
            studio = 76;
            apartment = 77;
        if (nightsCount >= 14) {
            discountApartment = apartment - (apartment / 100 * 10);
            finalPriceStudio = studio * nightsCount;
            finalPriceApartment = discountApartment * nightsCount;
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
        } else {
            finalPriceApartment = studio * nightsCount;
            finalPriceApartment = apartment * nightsCount;
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`);
        }
        break;
        
    }

    


}
//hotelRoom(["May","15"]);
hotelRoom(["June","14"]);
//hotelRoom(["August","20"]);



