function back(){
    window.location="index.html";
}

function getScore(){
    Score=localStorage.getItem("Score");
    document.getElementById("update").innerHTML="<h1>Score : " + Score + "</h1>";
}