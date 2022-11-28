function keyArrowRight(){
    console.log("Right Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        console.log(blocks[i].style.left);
        blocks[i].style.left += 170;                           
    }
}

function keyArrowLeft(){
    console.log("Left Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.left -= 170;        
    }
}
function keyArrowUp(){
    console.log("Up Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top -= 170;        
    }
}
function keyArrowDown(){
    console.log("Down Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top += 170;        
    }
}

function gameStart(){
    var blockmap = new BlockMap();
    blockmap.addblock(new Block(2));

    
    document.createElement("div");
    div_app.appendChild();
}

function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'Enter':
            gameStart();
            break;
        case 'ArrowRight':
            keyArrowRight();
            break;
        case 'ArrowLeft':
            keyArrowLeft();
            break;
        case 'ArrowUp':
            keyArrowUp();
            break;
        case 'ArrowDown':
            keyArrowDown();
            break;
        default:            
            break;
    }
}

window.onkeydown = keylog;

class BlockMap{
    constructor(row,column){
        this.Map = Array.from(Array(row), ()=> Array(column).fill(0));
        this.div_app = document.getElementById("app");
    }
    addblock(x,y,block){
        block.setactive(true);
        block.setcoord(x,y);
        this.Map[x][y] = block;
    }
    removeblock(x,y){
        block.setactive(false);
        this.Map[x][y] = null;
    } 

}

class Block{
    constructor(value){
        this.Value = value;
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
        this.Element = document.createElement("div");
        this.Element.setAttribute("class","blockPrefab")
    }
    changevalue(value){
        this.Value = value;
    }
    setactive(isActivated){
        this.Active = isActivated;        
    }
    setcoord(x,y){
        this.XPos += 150*x;
        this.YPos += 150*y;
    }
    removeblock(){
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
    }

}

blockMap[0][0] = new Block(2);
blockMap[0][3] = new Block(2);