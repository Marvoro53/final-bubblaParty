var hats = {
    Size: "One size",
    Brand: "Unique",
    Pieces: 8,
    Dimensions: [4.25, 8, 8.5 ,"inches"]
}
function hats1() {
    var place = document.getElementById("submit1");

    for (value in hats) {
        place.innerHTML = "Size: " + hats.Size + "<br>" + "Brand: " + hats.Brand + "<br>" + "Pieces: " + hats.Pieces + "<br>" + "Dimensions LxWxH: " + hats.Dimensions
    };
};
//second pro
var plates = {
    Material: "Paper",
    Color: ["Red", "Blue", "White"],
    Brand: "Unique",
    Occasion: ["Multi-use"]
}
function plates1() {
    var place = document.getElementById("submit2");

    for (value in plates) {
        place.innerHTML = "Material: " + plates.Material + "<br>" + "Color" + plates.Color
           + "<br>" + "Brand: " + plates.Brand + "<br>" + "Occasion" + plates.Occasion
    }
};
//third pro
var napkins = {
    color:["Silver", "White", "Black"],
    size: "1 piece",
    material: "Paper",
    brand: "Amscan"
}
function napkins1() {
    var place=document.getElementById("submit3");

    for(value in napkins){
        place.innerHTML = "Color: " + napkins.color + "<br>" + "Size: " + napkins.size + "<br>"
        + "Material: " + napkins.material + "<br>" + "Brand: " +napkins.brand
    }
}
//fourth pro
var cup = {
    material: "Plastic",
    color: ["Red", "Clear"],
    brand: "Amazon Basics",
    capacity: [16 + "Fluid Ounces"]
}
function cup1(){
    var place=document.getElementById("submit4");

    for(value in cup){
        place.innerHTML= "Material: " + cup.material + "<br>" + "Color: " + cup.color + "<br>"
        + "Brand: " + cup.brand + "<br>" + "Capacity: " + cup.capacity
    }
}
//functions
function clear1() {
    document.getElementById("submit1").innerText="See Details";
}

function clear2() {
    document.getElementById("submit2").innerText="See Details";
}

function clear3() {
    document.getElementById("submit3").innerText="See Details";
}
function clear4(){
    document.getElementById("submit4").innerText="See Details";
}
