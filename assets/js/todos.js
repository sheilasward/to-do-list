// Check off specific To-Dos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete To-Do
$("ul").on("click", "span",function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove;
    });
    e.stopPropagation();
});

$("input[type='text']").on("keypress", function(e) {
    if (e.which === 13) {
        // Grab new to-do value from input
        var newToDo = ($(this).val());
        // Clear the text box
        $(this).val("");
        // Create a new li and append it to the ul element
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newToDo);
    }
});

$(".fa-pencil-alt").click(function() {
    $("input[type='text']").fadeToggle();
});