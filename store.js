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
// var plates = {
//     Material: "Paper",
//     Color: "Red", "Blue", "White",
//     Brand: "Unique",
//     Occasion: ["Multi-use"]
// }
// function plates1() {
//     var place = document.getElementById("submit1");

//     for (value in ) {
//         place.innerHTML = 
//     }
// };
//third pro
//fourth pro
//fith pro
//sixth pro
//clears
function clear1() {
    document.getElementById("submit1").innerText="See Details";
}

// function clear3() {
//     document.getElementById("submit2").innerText="See Details";
// }

// function clear3() {
//     document.getElementById("submit3").innerText="See Details";
// }
