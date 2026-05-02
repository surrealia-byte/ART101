let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCounter=0;
let mood="neutral";

function makeImage( colorToMatch ) { 
    if ( colors[colorCount] == colorToMatch ) {
        $("body").append("<img width=100 src='"+colorToMatch+".jpg'>");
    }
}

function paintPage( colorToPaint ) {
  $("body").css("background-color", colorToPaint);
}

$("#Orchid").click(function () { 
   console.log("orchid is clicked");
   paintPage( "Orchid");
});
$("#Plum").click(function () { 
   console.log("orchid is clicked");
   paintPage( "Plum");
});

$("#needy-button").click(function () { 
 
makeImage("Orchid");
makeImage("Plum");   

count = count + 1;
colorCount=count-1;

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);
   
        if (colorCount==4) { 
            colorCount=0;  
            console.log("it happened");
        }

        if (colors[colorCount] == "HotPink") { 
            $("#needy-button").after(" notPink ");
        }
        
        
        else if (colors[colorCount] == "Orchid") {
            $("#needy-button").after(" hey Orchid ");
        }
        else {
            $("#needy-button").after(" all other colors ");
        }

    if (count < 5) { mood="fresh and happy"; }
    else if ( count >= 5 && count < 10) {mood="keep pushing";}
    else { mood="so tired"; }

    console.log(mood);

});