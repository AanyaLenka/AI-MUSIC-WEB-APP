song1 = "";
song2 = "";

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}