function getRandomNumber(min, max) {
    /*TODO
    min - minimal value
    max - max value
    Example getRandomNumber(0,1) -> returns number that is either 0 or 1
    if min > max then you should swap values
    swap should be without additional variable in one line code
    */
   min <= max || ([min, max] = [max, min]);
   return Math.floor(min + Math.random()*(max - min + 1));
}
console.log(getRandomNumber(10,3));

function concatinate(prefix) {
    /*write the function concatinate(prefix)
    that by using the following code
    const concatApp = concatinate('App - ')
    const concatMessage = concatApp('Test status: Done')
    console.log(concatMassage)
    there should be displayed out App - Test status: Done
    */
   return (...args) => [prefix, ...args].join('');
}
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);
