

function zooShop (input) {
    let dog = Number(input[0]); // number of dogs
    let other = Number(input[1]); //number of other
    dog = dog * 2.5;
    other = other * 4;
    let result = dog + other;
    console.log(` ${result} lv.`);
}

zooShop(["5", "4"]);