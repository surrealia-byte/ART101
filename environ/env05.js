let environmentTitle = "Himawari";

let environmentElements = ["sunflowers", "clovers", "blue sky", "sunshine"];



let mainEntity = {
    aesthetic: "picture book",
    description: "fresh and bright",
    favoriteElement: environmentElements[0]
};

$("#details").hover(
    function() {
        $("#environment-output").stop(true, true).slideDown(300);
        $("#environment-output").html("<p> Name: " + environmentTitle + "</p>" + "<p>Aesthetic: "
         + mainEntity.aesthetic + "</p>" + "<p>Description: " + mainEntity.description + "</p>"
         + "</p>")
    },
    function () {
       $("#thought").stop(true, true).slideUp(300);
       $("#environment-output").text("");
    }
);

let counter = 0;

$("#aesthetic").click(function(){
    if (counter > 3) {
        counter = 0
    }
    $("#element-output").html(environmentElements[counter]);
    counter = counter + 1;
}
);


$("#aesthetic").hover(
    function () {
        $("#element-output").stop(true, true).slideDown(300);
        $("#status").text("The creature revealed a thought.");
    },
    function () {
        $("#element-output").stop(true, true).slideUp(300);
        $("#status").text("The thought disappeared.");
    }
);

$("#aesthetic").mousemove(function (event) {
    if (following === true) {
        $("#creature").css({
            left: event.pageX - $("#scene").offset().left + 30,
            top: event.pageY - $("#scene").offset().top + 30
        });
}
});

