// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 10, dy = 10, i = 0, N = 20;

// 預載走路圖片
let walk = new Array(N);
for(let i = 0; i < N; ++i)
{
	walk[i] = new Image();
	walk[i].src = "img/Walk (" + i + ").png";
}

// 貼上圖片
function drawImg() 
{    
    ctx.drawImage(walk[i%N], x, y, 200, 200);
}

// 按下按鍵時觸發
document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) 
{
	if(e.key == "ArrowRight")        x += dx, ++i;
	else if(e.key == "ArrowLeft")    x -= dx, ++i;
    else if(e.key == "ArrowUp")      y -= dy, ++i;
	else if(e.key == "ArrowDown")    y += dy, ++i;
}

// 更新畫布
function draw() 
{	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImg();
    requestAnimationFrame(draw);
}
draw();