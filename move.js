const turtle = document.querySelector('.turt');


let x = 0;
let y = 0;
let speed = 50;
let flipped = false;
let rotate=0;

function handleKeyDown(event){
    if(!event.key.includes("Arrow")) {return;}
    switch(event.key) {
        case 'ArrowUp':
            y=y-1;
            rotate = -90;
            break;
        case 'ArrowDown':
            y=y+1;
            rotate = 90;
            break;
        case 'ArrowLeft':
            x=x-1;
            rotate=0;
            flipped = true;
            break;
        case 'ArrowRight':
            x=x+1;
            rotate=0;
            flipped = false;
            break;
        default:
            console.log("Not a valid move");
            break;
    }
    turtle.setAttribute("style", `
                --rotateX: ${flipped ? '180deg' : '0'};
                --x: ${x * speed}px; 
                --y:${y * speed}px;
                --rotate:${rotate}deg;
                `);
}

window.addEventListener("keydown",handleKeyDown);