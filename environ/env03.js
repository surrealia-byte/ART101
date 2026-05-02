let environmentTitle = "Himawari";

let environmentElements = ["sunflowers", "clovers", "blue sky", "sunshine"];

let mainEntity = {
    source: "Yotsuba&!",
    aesthetic: "picture book",
    description: "fresh and bright",
    favoriteElement: environmentElements[1]
};

$("#details").click(function() {
    $("#environment-output").html("<p>Name: " + mainEntity.source + "</p>" + "<p>Aesthetic: " + mainEntity.aesthetic + "</p>" + "<p>Description:" + mainEntity.description + "</p>"
        + "<p>Elements: " + environmentElements + "</p>")
});
