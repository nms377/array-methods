// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

var nameArray = [];

nameArray.push('Coco','Sandry');

console.log(nameArray);

genericNumberArray.push(6,7,8,9,10);

console.log(genericNumberArray);

colors.pop('Charlie');

var popResult = 'Charlie';

console.log(colors, popResult);

scrambledWords.reverse();

phoneNumber.reverse();

console.log(scrambledWords, phoneNumber);

orderQueue.shift();

nextOrder = {takeOut:'Ice Cream'};

console.log(orderQueue, nextOrder);

mixedNums.sort();

console.log(mixedNums);

mixedWords.sort();

console.log(mixedWords);

fruitCollection.splice(1, 3);

var notFruit = ['Scissors', 'Pug', 'Lady Bug'];

console.log(fruitCollection, notFruit);

gemBox.splice(5, 2);
gemBox.splice(6,4);

console.log(gemBox);

upToTen.splice(2, 0, 3,4,5,6,7,8);

console.log(upToTen);

brownOnly.splice(1, 6, 'brown', 'brown', 'brown', 'brown');

console.log(brownOnly);

orderedValues.unshift(1,2,3);

var orderedValuesNewLength = orderedValues.length;

console.log(orderedValues, orderedValuesNewLength);

var randomThingsArray = genericNumberArray.concat(colors);

console.log(randomThingsArray);

myOrders = [{takeOut: 'whiskey'}, {takeOut: 'more whiskey'}];

var updatedOrders = orderQueue.concat(myOrders);

console.log(updatedOrders);

var sentence = scrambledWords.join(' ');

console.log(sentence);

var myFruits = fruitCollection.join(' + ');

console.log(myFruits);

var favoriteFriends = friends.slice(1,3);

console.log(favoriteFriends);

var owesMoney = friends.slice(3, 6);

console.log(owesMoney);

var monthNameString = monthNames.toString();

console.log(monthNameString);

var favoriteColor = colors.indexOf('Red');

console.log(favoriteColor);

var favoriteEvenNumber = mixedNums.indexOf(76);

console.log(favoriteEvenNumber);

var lastNine = bulkNumbers.lastIndexOf(9);

console.log(lastNine);

var lastFive = bulkNumbers.lastIndexOf(5);

console.log(lastFive);
