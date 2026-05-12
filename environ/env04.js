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

let counter = -1;

$("#aesthetic").click(function(){
    let stringcode = environmentElements.get(counter)
    
    counter = -1
    if (counter > 5) {
        counter = 0
    }
    let newStringcode = environmentElements.get(counter)
    
    counter = counter + 1;
    $("#element-output").html(environmentElements[counter]);
}
);