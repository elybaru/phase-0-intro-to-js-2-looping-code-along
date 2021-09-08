// Code your solutions in this file

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);

    }

    return gifts;
}

wrapGifts(gifts);
*/

function writeCards(stringName, eventName) {
    const messages = []
    for (let i = 0; i < stringName.length; i++) {
        messages.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;

}

function countDown(integer){
    while (integer > -1) {
        console.log(integer--)
    }

}