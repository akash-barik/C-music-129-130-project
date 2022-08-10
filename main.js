song1="";
song2="";
leftnosex="";
leftnosey="";
rightnosex="";
rightnosey="";
song_name="";

function preload(){
    song1=loadSound("Srivalli(Malyalam).mp3");
    song2=loadSound("Alan-Walker-Faded.mp3");
}

 function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

 }
 
 function modelloaded(){
    console.log("modal is loaded");
 }

 function gotposes(results){
	if(posenet.length>0){
		console.log(results);
      leftnosex=results[0].pose.nose.x;
	  leftnosey=results[0].pose.nose.y;
	  console.log("leftnosex= "+ noseX + ",leftnosey= " +  noseY);
    }
	}

function draw(){
    image(video,0,0,600,500);
    image(video,0,0,600,530);
    fill("#FFFF00");
    stroke("#FFFF00");
    song_name = song1.isPlaying();
    console.log(song_name);
  if(scoreleftWrist > 0.2){
     circle(leftWrist_x,leftWrist_y,20);
    song1.stop();
    if(song_name == false){
           song2.play();
        }
    else{
        console.log("Sond=Pushpa(Malyalam)");
        document.getElementById("").innerHTML = "Song=Pushpa(Malyalam)";
        }}}


