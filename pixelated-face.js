const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');

const faceDetector = new FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);


//write a function that will populate the users video

function populate Video(){
  const stream = navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height:720 }
  })
}