let count = 0;
let buttonCreature = {
    name: "Mitzi",
    species: "cat",
    favoriteFood: "sushi",
    moods: ["sleepy", "nervous", "relaxed", "cranky", "hopeful", "confused"]
};

//this esentially controls everything about this lab, making the button react
$("#needy-button").click(function () {
//this part was added to make it stop going 'undefined'
    if (count > 5) {
        count = 0
    }
    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    $("#output").html(message);

    //adds this info to the console log
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});


