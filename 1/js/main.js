// ====1====
const age = 14;
console.log(age);
// ====2====
const name = "Misha";
console.log(name);
// ====3====
const isStudent = true; 
console.log(isStudent);
// ====4====
const myString = "Цікава фраза";
console.log(myString);
// ====5====
let myNumber = 500;
myNumber += 10;
console.log(myNumber)
// ====6====
const myNull = null;
console.log(myNull)
// ====7====
const YourName = prompt("What is your name?");
alert("Hello, " + YourName);
// ====8====
const ConfirmWindow = confirm("Підтвердити дію?");
if (ConfirmWindow === true) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}
// ====9====
alert("Дія небезпечна!");
const ShouldConfirm = confirm("Підтвердити дію?");
if (ShouldConfirm === true) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}