

document.getElementById("Cats").onclick = function(){
    document.querySelectorAll(".cat").forEach(a=>a.style.display = "initial");
    document.querySelectorAll(".dog").forEach(a=>a.style.display = "none");

}

document.getElementById("Dogs").onclick = function(){
    document.querySelectorAll(".dog").forEach(a=>a.style.display = "initial");
    document.querySelectorAll(".cat").forEach(a=>a.style.display = "none");

}

document.getElementById("All").onclick = function(){
    document.querySelectorAll(".dog").forEach(a=>a.style.display = "initial");
    document.querySelectorAll(".cat").forEach(a=>a.style.display = "initial");

}


  