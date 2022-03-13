Nosex=0;
Nosey=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/C5kwP0P4/png-transparent-man-s-mustache-moustache-beard-product-object-thumbnail-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modeloaded);
    poseNet.on("pose",gotposes);
}
function modeloaded(){
    console.log("model has loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        Nosex=results[0].pose.nose.x-35;
        Nosey=results[0].pose.nose.y-10;
    }
}
function draw(){
    image (video,0,0,300,300);
    image (mustache,Nosex,Nosey,80,50);
}
function takesnapshot(){
    save ("mustache.png")
}