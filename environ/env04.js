let environmentTitle = "Himawari";

let environmentElements = ["sunflowers", "clovers", "blue sky", "sunshine"];



let mainEntity = {
    aesthetic: "picture book",
    description: "fresh and bright",
    favoriteElement: environmentElements[0]
};


$("#details").click(function() {
    
    $("#environment-output").html("<p> Name: " + environmentTitle + "</p>" + "<p>Aesthetic: "
         + mainEntity.aesthetic + "</p>" + "<p>Description: " + mainEntity.description + "</p>"
        + "</p>")
});

let counter = 0;

//click function makes "Elements" do something when clicked
$("#aesthetic").click(function(){
    if (counter > 3) {
        counter = 0
    }
    //makes sure something is added every time it is clicked
    $("#element-output").html(environmentElements[counter]);
    counter = counter + 1;
}
);