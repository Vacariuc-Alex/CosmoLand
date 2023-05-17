function myFunction()
{
    var x = document.getElementById("link-box");
    console.log(x.style.display);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else
    {
        x.style.display = "none";
    }
}

function buttonTable() {
    x = document.getElementById("table");
    console.log(x.style.display);
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}