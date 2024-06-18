window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (Number.isInteger(scroll/window.innerHeight)) {
        let dot_num = scroll/window.innerHeight;
        document.getElementById("0").classList.remove("active");
        document.getElementById("1").classList.remove("active");
        document.getElementById("2").classList.remove("active");
        document.getElementById("3").classList.remove("active");
        
        if (dot_num > 2) {
            document.getElementById("3").classList.toggle("active");
        } else if (dot_num > 1) {
            document.getElementById("2").classList.toggle("active");
        } else if (dot_num > 0) {
            document.getElementById("1").classList.toggle("active");
        } else if (dot_num == 0) {
            document.getElementById("0").classList.toggle("active");
        }
    }
});

function gotoPageone() {
    document.getElementById("one").scrollIntoView();
}
function gotoPagetwo() {
    document.getElementById("two").scrollIntoView();
}
function gotoPagethree() {
    document.getElementById("three").scrollIntoView();
}
function gotoPagefour() {
    document.getElementById("four").scrollIntoView();
}

let tiles_container = document.getElementsByClassName("tiles-container");
let tile = document.getElementById("tile");
let total_tiles = 300;

function generateTiles() {
    for (i = 1; i < total_tiles; i++) {
        const new_tile = tile.cloneNode(true);
        tiles_container[0].appendChild(new_tile);
        let random_delay = Math.floor(Math.random() * 5);
        if (random_delay == 0) {
            new_tile.classList.toggle("animation-delay-fastest");
        } else if (random_delay == 1) {
            new_tile.classList.toggle("animation-delay-fast");
        } else if (random_delay == 2) {
            new_tile.classList.toggle("animation-delay-medium");
        } else if (random_delay == 3) {
            new_tile.classList.toggle("animation-delay-slow");
        } else if (random_delay == 4) {
            new_tile.classList.toggle("animation-delay-slowest");
        }
    }
}

setTimeout(function() {
    topFunction();
  }, 100);

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}