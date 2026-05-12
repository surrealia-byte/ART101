// add creature to the garden
$("#crAdd").click( function(){

    // grab the value from the text input and assign it to a variable crName
    let crName=$("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();

    // test in console
    console.log(crName);  

    if( crName.length > 2) { 
        $("#creature-list").append("<div>" +crName +", "+crColor + 
            ", " +crEyesNum +"</div>");
    }
   

     $("#crName").val(""); // write the value
    // $("#crName").val(); // retrieve the value

}); 
