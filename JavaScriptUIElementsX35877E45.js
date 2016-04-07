
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

// -----------------------------------------------------------------------------
/*
    Dependencies: jQuery
    Suite1 works with existing markup

*/

JavaScriptUIElementsX35877E45.suite1 = {}

JavaScriptUIElementsX35877E45.suite1.attachClickBehaviorToElement = function(input_parameters){
    var parameters = {
        targetDiv: null, // mandatory
        fn: null         // mandatory
    }
    /*
        fn: function of arity 0
    */
    $.extend( parameters, input_parameters );
    if(!parameters['targetDiv']) return false;
    $(document).delegate('#'+parameters['targetDiv'], 'click', function(e){
        e.preventDefault();
        parameters['fn']();
    });
    return true;
}

// -----------------------------------------------------------------------------
/*
    Dependencies: jQuery
    Suite2 functions generate all needed markup
*/

JavaScriptUIElementsX35877E45.suite2 = {}

JavaScriptUIElementsX35877E45.suite2.textInputWithSubmitButton = function(input_parameters){
    var parameters = {
        targetDiv: null,    // mandatory
        valueHandler: null  // mandatory
    }
    /*
        valueHandler: function of arity 1 (takes the inputted text)
    */
    $.extend( parameters, input_parameters );
    if(!parameters.targetDiv) return false;
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
    return true;
}

JavaScriptUIElementsX35877E45.suite2.choiceBetweenSeveralOptions_DropDown = function(input_parameters){
    var parameters = {
        targetDiv: null,  // mandatory
        announce: null,   // mandatory
        options: null     // mandatory
    }
    /*

        announce: value at the default (top) position of the drop down menu

        option: an array of arrays of length 2
        Each array of length 2 is made of the description and the function of arity 0 to fire if that option is chosen
        example [
            ["Alice", function(){ alert("Alice"); }]
            ["Bob",   function(){ alert("Bob"); }]
        ]

    */
    $.extend( parameters, input_parameters );
    if(!parameters. targetDiv) return false;
    if(!parameters.options) return false;
    var html1 = ''
    var uuid1 = JavaScriptUIElementsX35877E45.core.ridentifier();
    html1 += '<select id="'+uuid1+'">';
    html1 += '<option value="">'+parameters.announce+'</option>'
    $.each( parameters.options, function(index, option) {
        // val: ["Alice", function(){ alert("Alice"); }]
        html1 += '<option value="'+btoa(option[0])+'">'+option[0]+'</option>'
    });
    html1 += '</select>'
    $('#'+parameters.targetDiv).html(html1);
    $(document).delegate('#'+uuid1, 'change', function(e){
        e.preventDefault();
        var selected = $('#'+uuid1).val();
        if(selected.length==0){
            return;
        }
        $.each( parameters.options, function(index, option) {
            if(selected==btoa(option[0])){
                option[1]();
            }
        });
    });
    return true;
}

JavaScriptUIElementsX35877E45.suite2.choiceBetweenSeveralOptions_OneButtonPerLine = function(input_parameters){
    var parameters = {
        targetDiv: null,  // mandatory
        announce: null,   // mandatory
        options: null     // mandatory
    }
    /*

        announce: value at the default (top) position of the drop down menu

        option: an array of arrays of length 2
        Each array of length 2 is made of the description and the function of arity 0 to fire if that option is chosen
        example [
            ["Alice", function(){ alert("Alice"); }]
            ["Bob",   function(){ alert("Bob"); }]
        ]

    */
    $.extend( parameters, input_parameters );
    if(!parameters. targetDiv) return false;
    if(!parameters.options) return false;
    var html1 = ''
    html1 += '<div>'+parameters.announce+'</div>'
    $.each( parameters.options, function(index, option) {
        // val: ["Alice", function(){ alert("Alice"); }]
        var uuid = JavaScriptUIElementsX35877E45.core.ridentifier();
        html1 += '<div><input type="button" id="'+uuid+'" value="'+option[0]+'" /></div>'
        $(document).delegate('#'+uuid, 'click', function(e){
            e.preventDefault();
            option[1]();
        });
    });
    $('#'+parameters.targetDiv).html(html1);

    return true;
}