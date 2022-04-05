function changebg(){
    document.querySelector("#bg").src= " images/assets/succulents-2.jpg"
}
function samebg(){
    document.querySelector("#bg").src= "images/assets/succulents-1.jpg"
}

function removebox(){
    var remove=document.querySelector(".pop-up");
    remove.parentNode.removeChild(remove);
}