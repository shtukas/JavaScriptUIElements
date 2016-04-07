
var JavaScriptUIElementsX35877E45 = {}

JavaScriptUIElementsX35877E45.core = {}

JavaScriptUIElementsX35877E45.core.randomString = function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

JavaScriptUIElementsX35877E45.core.ridentifier = function(){
    return 'rid'+JavaScriptUIElementsX35877E45.core.randomString(16,'0123456789abcdefghijklmnopqrstuvwxyz');
}

/*
    Standard elements.
    Dependencies: jQuery
*/

JavaScriptUIElementsX35877E45.suite1 = {}

JavaScriptUIElementsX35877E45.suite1.textInputWithSubmitButton = function(extension_parameters){
    var parameters = {
        targetDiv: null,
        valueHandler : null
    }
    $.extend( parameters, extension_parameters );
    if(!parameters['targetDiv']) return false;
    var uuid1 = JavaScriptUIElementsX35877E45.core.ridentifier();
    var uuid2 = JavaScriptUIElementsX35877E45.core.ridentifier();
    var html1 = '';
    html1 += '<div>';
    html1 += '    <input id="'+uuid1+'" type="text">';
    html1 += '    <input id="'+uuid2+'" type="button" value="Done">';
    html1 += '<div>';
    $('#'+parameters.targetDiv).html(html1);
    $(document).delegate('#'+uuid2, 'click', function(e){
        e.preventDefault();
        var text = $('#'+uuid1).val()
        parameters.valueHandler(text);
    });
}