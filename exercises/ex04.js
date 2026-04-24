
let count=0;
let colors=["Orchid", "Coral", "HotPink", "Plum"];
let colorCount;

$("#needy-button").click( function(){
  count= count + 1;
  colorCount=count-1
  $("#needy-button").html("I was clicked " + count + " " + colors[count] );
  $("#needy-button").css( "background-color", colors[colorCount]);
  $("html").css( "background-color", colors[colorCount]);
  console.log();
});