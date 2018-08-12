/*-----------------*/
var content = document.getElementById("content");

var button = document.getElementById("toggle");

button.onclick = function () {
    
        if (content.className === "open") {
            
            content.className = "";
            
    } else {
        
        content.className = "open";
        
    }
};
