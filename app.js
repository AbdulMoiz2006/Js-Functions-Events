function hideParagraph(){

var Paragraph = document.getElementById("para")

Paragraph.style.display = 'none'


}





function showParagraph(){



    var Paragraph = document.getElementById("para")

    Paragraph.style.display = 'block'
    
    
}



// function textchange(){

// var para = document.getElementById("paragraph")

// para.innerHTML = "The text has been changed" 




// }


function textchange(){

var para = document.getElementById("paragraph").innerHTML = "The Text has been changed"
    
}


var originaltext = document.getElementById("paragraph").innerHTML

function restoretext(){

document.getElementById("paragraph").innerHTML = originaltext;

}