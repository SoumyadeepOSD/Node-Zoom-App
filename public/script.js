//javascript for the frontend will be written here
const socket = io("/");
const myVideo = document.createElement("video");
const videoGrid = document.getElementById("video-grid");
myVideo.muted = true;

var peer = new Peer(undefined, {
  path: "/peerjs",
  host: "/",
  port: "3030",
});

let myVideoStream;
navigator.mediaDevices
  .getUserMedia({
    //getUserMedia is a promise
    video: true, //access for video
    audio: true, //access for audio
  })
  .then((stream) => {
    myVideoStream = stream; //here stream is a variable which indicates the video stream coming from users and store it into the global variable that has been created
    addVideoStream(myVideo, stream);

    peer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

    // socket.on("user-connected", (userId) => {
    //   connectToNewUser(userId, stream);
    // });

    socket.on('user-connected', userId => {
      // user is joining`
      setTimeout(() => {
      // user joined
      connectToNewUser(userId, stream)
      }, 1000)
      })  
      let text = $('input')

      $('html').keydown((e)=>{
        if(e.which == 13 && text.val().length !== 0){
        console.log(text.val());
        socket.emit('message', text.val());
        text.val('')
      }
  });
  
        socket.on('createMessage', message=>{
        $('.messages').append(`<li class="message"><b>user</b></br>${message}</li>`)
        scrollToBottom()
  }) 

  });

peer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

const connectToNewUser = (userId, stream) => {
  const call = peer.call(userId, stream);
  const video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    addVideoStream(video, userVideoStream);
  });
};

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.appendChild(video);
};

const scrollToBottom = () =>{
  var d = $('.main__chat__window');
  d.scrollTop(d.prop("scrollHeight"));
}

//Mute our video
const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if(enabled){
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  }
  else{
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
}

const setMuteButton = () => {
  const html = `
  <i class="fas fa-microphone"></i>
  <span>Mute</span>
  `

  document.querySelector('.main__mute__button').innerHTML = html;
}

const setUnmuteButton = () => {
  const html = `
    <i class="unmute fas fa-microphone-slash"></i>
    <span>Unmute</span>
  `

  document.querySelector('.main__mute__button').innerHTML = html;
}


const playStop = () => {
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if(enabled){
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo()
  }
  else{
    setStopVideo()
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
}

const setStopVideo = () => {
  const html = `
  <i class="fas fa-video"></i>
  <span>Stop Video</span>
  `
  document.querySelector('.main__video__button').innerHTML = html;
}

const setPlayVideo = () => {
  const html = `
  <i class="stop fas fa-video-slash"></i>
  <span>Play Video</span>
  `
  document.querySelector('.main__video__button').innerHTML = html; 
}