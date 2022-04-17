var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = ' toi!';
} else if (hourNow > 12) {
    greeting = 'chieu!';
} else if (hourNow > 0) {
    greeting = 'sang';
} else {
    greeting = 'chao!';
}
document.write('<h3>' + greeting + '</h3>');