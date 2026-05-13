// add creature to the garden
$("#crAdd").click( function(){

    // grab the value from the text input and assign it to a variable crName
    let crName=$("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();
    let crEyesHTML = "";
    for (let i = 0; i < crEyesNum; i++) {
        crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
    }


    // test in console
    console.log(crName).val();
    console.log(crColor).val();
    console.log(crEyesNum).val();
    



    if (crName.length > 2) { 
        $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body" style="background-color: ${crColor}"> B </div>
                <div class="creature-info">${crName}</div>
            </div>
        `);
    }
   

     $("#crName").val(""); // write the value
    // $("#crName").val(); // retrieve the value

}); 
