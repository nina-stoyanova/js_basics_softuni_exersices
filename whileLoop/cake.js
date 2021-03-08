function cake(array){

    let pieceCount = Number(array[0]) * Number(array[1]);

if (array.length === 2){ //nobody takes cake
    
    console.log(`${pieceCount} pieces are left.`);
} 

if (pieceCount === Number(array[2])){
    console.log(`No more cake left! You need 0 pieces more.`);
}



}
cake(["10","10"]);
cake(["10","10","100"]);
