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

function randomInt(max) {
    return Math.floor(Math.random() * max);
    
}

let tiles_container = document.getElementsByClassName("tiles-container");
let tile = document.getElementById("tile");
let total_tiles = 300;

function generateTiles() {
    for (i = 1; i < total_tiles; i++) {
        const new_tile = tile.cloneNode(true);
        tiles_container[0].appendChild(new_tile);
        let random_delay = randomInt(5);
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

        let random_tile_pic = randomInt(10);
        if (random_tile_pic == 0) {
            new_tile.src = "tile-01.webp"
            new_tile.atl = "gray tile"
        } else if (random_tile_pic == 1) {
            new_tile.src = "tile-02.webp"
            new_tile.atl = "yellow tile"
        } else if (random_tile_pic == 2) {
            new_tile.src = "tile-03.webp"
            new_tile.atl = "blue tile"
        } else if (random_tile_pic == 3) {
            new_tile.src = "tile-04.webp"
            new_tile.atl = "red tile"
        } else if (random_tile_pic == 4) {
            new_tile.src = "tile-05.webp"
            new_tile.atl = "pale brown tile"
        } else if (random_tile_pic == 5) {
            new_tile.src = "tile-06.webp"
            new_tile.atl = "pale gray tile"
        } else if (random_tile_pic == 6) {
            new_tile.src = "tile-07.webp"
            new_tile.atl = "brown tile"
        } else if (random_tile_pic == 7) {
            new_tile.src = "tile-08.webp"
            new_tile.atl = "white tile"
        } else if (random_tile_pic == 8) {
            new_tile.src = "tile-09.webp"
            new_tile.atl = "green tile"
        } else if (random_tile_pic == 9) {
            new_tile.src = "tile-10.webp"
            new_tile.atl = "black tile"
        }
    }
}

setTimeout(function() {
    topFunction();
  }, 150);

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}