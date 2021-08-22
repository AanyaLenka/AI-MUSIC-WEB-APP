song1 = "";
song2 = "";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
scoreLeftWrist="";
scoreRightWrist="";

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    song1.setVolume(1);
    song2.setVolume(1);
    song1.rate(1);
    song2.rate(1);
}

function draw() {
    image(video, 0, 0, 400, 400);
    fill('#FF0000');
    stroke('#FF0000');
    song1_status=song1.isPlaying();
    song2_status=song2.isPlaying();
    if(scoreLeftWrist>0.2)
    {
    circle(leftWristX,leftWristY,20);
    song2.stop();
    if(song1_status==false)
    {
    song1.play();
    }
    }

    if(scoreRightWrist>0.2)
    {
    circle(rightWristX,rightWristY,20);
    song1.stop();
    if(song2_status==false)
    {
    song2.play();
    }
    }
}

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function modelLoaded()
{
console.log("PoseNet is intialized");
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
scoreLeftWrist=results[0].pose.keypoints[9].score;
scoreRightWrist=results[0].pose.keypoints[10].score;
}
}