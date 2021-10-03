var dvdpos = false,
    currTop= 0,
    currLeft = 0,
    prevTop = 0,
    prevLeft = 0,
    directionY_prev = false,
    directionX_prev = false,
    directionY = false,
    directionX = false,
    inited = 0,
    rngPrev = 1,
    colors = {
        1 : 'be00ff',
        2 : '00feff',
        3 : 'ff8300',
        4 : '0026ff',
        5 : 'fffa01',
        6 : 'ff2600',
        7 : 'ff008b'
    };

$(document).ready(function () {
    function rng(min, max) {
        let newNum = Math.floor(Math.random() * (max - min + 1) + min);
        if (newNum == rngPrev) {
            newNum = Math.floor(Math.random() * (max - min + 1) + min)
            return newNum;
        } else {
            return newNum;
        }
    }

    function getPos() {
        let currPos = $('#dvd').position();
        return currPos;
    };

    function changeColor() {
        var number = rng(1, 7);
        var color = colors[number];
        $('#dvd').attr('fill', '#'+color);
        rngPrev = color;
    }

    setInterval(function(){
        dvdpos = getPos();

        prevTop = currTop,
        prevLeft = currLeft;
        currTop = dvdpos.top;
        currLeft = dvdpos.left;

        directionY_prev = directionY;
        directionX_prev = directionX;

        if (prevTop > currTop) {
            directionY = 'bottom';
        } else if (prevTop < currTop) {
            directionY = 'top';
        }

        if (prevLeft > currLeft) {
            directionX = 'right';
        } else if (prevLeft < currLeft) {
            directionX = 'left';
        }

        if ((directionY_prev != directionY) || (directionX_prev != directionX)) { changeColor(); }
    }, 100);
    
    inited = 1;
    if (inited == 1) { $('#marquee').removeClass('hidden'); }
});