//The css() method sets or returns one or more style properties for the selected elements.
$(document).ready(function(){
    $("p").on('mouseenter', function() {
        $(this).css({"font-family": "Courier, Helvetica, sans-serif", "font-size": "200%"});
    });
});    