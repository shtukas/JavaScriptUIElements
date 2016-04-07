
/*
    Dependencies: jQuery
*/

var JavascriptUIElementsX35877E45 = {}

JavascriptUIElementsX35877E45.core = {}

JavascriptUIElementsX35877E45.core.randomString = function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

JavascriptUIElementsX35877E45.core.ridentifier = function(){
    return 'rid'+JavascriptUIElementsX35877E45.core.randomString(16,'0123456789abcdefghijklmnopqrstuvwxyz');
}