function preload(){
};
function setup(){
canvas = createCanvas(600, 400); 
canvas.position(400, 200); 
video = createCapture(VIDEO); 
video.hide(); tint_color = "";
}

 
function draw(){
   
    tint(tint_color);
    fill(252, 252, 252)
    stroke(27, 242, 59);
   
    rect(30,30, 550, 350);

    image(video,50, 50, 500, 300);
    fill(242, 27, 27)
    stroke(242, 27, 27);
    circle(40, 40, 50);
    fill(242, 27, 27)
    stroke(242, 27, 27);
    circle(40, 360, 50);
    fill(242, 27, 27)
    stroke(242, 27, 27);
    circle(570, 360, 50);
    fill(242, 27, 27)
    stroke(242, 27, 27);
    circle(570, 40, 50);
    
}
function take_snapshot(){
save("snigdha.png");
}