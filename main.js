noseX = 0;
noseY = 0;
function preload() {
    noseImg = loadImage("https://postimg.cc/v1dgbS7p.png")


}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResult)
}

function draw() {
    image(video, 0, 0, 300, 300)

}

function snapshot() {
    save("snapshot.jpg")
}

function modelLoaded() {
    console.log("PoseNet Initialized")
    
}

function gotResult(results) {
    
    if(results.length>0){
        console.log(results)
    console.log("noseX-"+results[0].pose.nose.x)
    console.log("noseY-"+results[0].pose.nose.y)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    console.log("Left Eye-"+results[0].pose.leftEye.x)
    console.log("Right Eye-"+results[0].pose.rightEye.x)
    console.log("Right Eye-"+results[0].pose.rightEye.y)
    console.log("Left Eye-"+results[0].pose.leftEye.y)

    }
}


