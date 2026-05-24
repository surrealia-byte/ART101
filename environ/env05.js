let environmentTitle = "Himawari";

//sequence
let environmentElements = ["sunflowers", "clovers", "blue sky", "sunshine"];


//list of details that can be called
let mainEntity = {
    aesthetic: "picture book",
    description: "fresh and bright",
    favoriteElement: environmentElements[0]
};

//"Some Details About This Environment"
$("#details").hover(
    function() {
        $("#environment-output").stop(true, true).slideDown(300);
        $("#environment-output").html("<p> Name: " + environmentTitle + "</p>" + "<p>Aesthetic: "
         + mainEntity.aesthetic + "</p>" + "<p>Description: " + mainEntity.description + "</p>"
         + "</p>")  
        //change this long string into a function and make it easier to call
    },
    //I think this was done so it would know when to stop
    function () {
       $("#thought").stop(true, true).slideUp(300);
       $("#environment-output").text("");
    }
);

let counter = 0;
//click function connected to the button labeled, "Elements"
$("#aesthetic").click(function(){
    //this function checks and resets to the beginning of the sequence if it's at its end
    if (counter > 3) {
        counter = 0
    }
    $("#element-output").html(environmentElements[counter]);
    counter = counter + 1;
}
);
//hover function checks if the cursor is hovering over the button
$("#aesthetic").hover(
    function () {
        $("#element-output").html(environmentElements[counter]);
        $("#element-output").stop(true, true).slideDown(300);
    },
    //I think this was done so it would know when to stop
    function () {
        $("#element-output").stop(true, true).slideUp(300);
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

