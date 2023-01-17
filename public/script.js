//javascript for the frontend will be written here

const myVideo = document.createElement('video')
const videoGrid = document.getElementById('video-grid');
myVideo.muted = true;

let myVideoStream;
navigator.mediaDevices.getUserMedia({ //getUserMedia is a promise
    video: true, //access for video
    audio: true //access for audio
}).then(stream => {
    myVideoStream = stream; //here stream is a variable which indicates the video stream coming from users and store it into the global variable that has been created 
    addVideoStream(myVideo, stream);
})


const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    })
    videoGrid.appendChild(video);
}