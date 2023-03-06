# **QuickChat** ![](https://img.shields.io/badge/QuickChat-v%201.0.0-blue/?style=for-the-badge&logo=appveyor)

![](https://img.shields.io/badge/Node.JS-18.14.2-green)
![](https://img.shields.io/badge/Peer.JS-14.7-orange)

![image](https://user-images.githubusercontent.com/115442240/223030751-3686e789-d8ab-4e91-8998-6c98b8b6db5e.png)


----------------------------
## Description:

### This is a `NodeJS` Video calling application built upon `Peer.js`

- Peer.Js is a Javascript Framework to ease the functionality of making video/voice calls using WebRTC
- PeerJS wraps the browser's WebRTC implementation to provide a complete, configurable, and easy-to-use peer-to-peer connection API. Equipped with nothing but an ID, a peer can create a P2P data or media stream connection to a remote peer.
- By using peer.js people can connect with each other inside the browser via an unique tocken that is generated whenever a new user connects with the server. After starting the server the app opens up in the browser with an absolute random token or id, It allows browser to grant permission of capturing the video stream through the `webcam`. After joining the another user the video stream is accessed by the them with a proper unique id/token.





## Instruction of running the app in your local machine

<details open>
    <summary>STEP-1</summary>
    <div>
    <ul>
        <li>Fork the repo</li>
    </ul>
    </div>
</details>

<details open>
    <summary>STEP-2</summary>
    <div>
    <ul>
        <li>copy the https link of your forked project from the your github accout</li>
    </ul>
    </div>
</details>

<details open>
    <summary>STEP-3</summary>
    <div>
    <ul>
        <li>Go to the terminal and write  "git clone link_of_forked_repo"</li>
    </ul>
    </div>
</details>

<details open>
    <summary>STEP-4</summary>
    <div>
    <ul>
        <li> cd folder </li>
    </ul>
    </div>
</details>

<details open>
    <summary>STEP-5</summary>
    <div>
    <ul>
        <li>
        open it in code editor by writing "code ."
        </li>
    </ul>
    </div>
</details>

<details open>
    <summary>STEP-6</summary>
    <div>
    <ul>
        <li>
        install the required dependencies in package.json by writing "npm install"
        </li>
    </ul>
    </div>
</details>

<details open>
    <summary>STEP-7</summary>
    <div>
    <ul>
        <li>
        open it in localhost 3030 by writing  `"npm start"` in terminal
        </li>
    </ul>
    </div>
</details>

### You're ready to go

## Dependencies used in this project
- EJS is used to embed the JS in html
![](https://img.shields.io/badge/ejs-%5E3.1.8-orange)
- Express is used to make application with backed server
![](https://img.shields.io/badge/express-%5E4.18.2-red)
- Nodemon is used to deliver the quick changes that is made in codebase
![](https://img.shields.io/badge/nodemon-%5E2.0.20-green)
- Peer.js is used to colaboarte with different peers in web
![](https://img.shields.io/badge/peer-%5E0.6.1-blue)
- Socket.io is used to make the socket connection with express application
![](https://img.shields.io/badge/socket.io-%5E4.5.4-violet)
- UUID is used to generate random and unique id whenever a new user tries to connect
![](https://img.shields.io/badge/uuid-%5E9.0.0-brown)




# Features of QuickChat
- Connect peers of atleast 5+ people at a time
- Voice & Video functionality like other video calling application
- Light weight and easy to use application
- Chat functionality is implemented at the right side bar of application


# Some sample space of Application 🔽

##  Classification of all components in the application
![zoom](https://user-images.githubusercontent.com/115442240/223043314-e72c73e0-9bed-4a5d-9f91-3233de7b3ed6.png)

# Sample - 1
![image](https://user-images.githubusercontent.com/115442240/223044589-0af5ecb0-2180-4d87-b732-16eb6767d10c.png)

# Sample - 2
![image](https://user-images.githubusercontent.com/115442240/223045260-268deaf1-c760-4e05-8613-7766c1f41150.png)

# Sample - 3
![image](https://user-images.githubusercontent.com/115442240/223045383-073d181b-f79a-4a70-963a-09b132c6fdd5.png)

## Expected Future Implementation
- Improvement of UI/UX.
- Implement the button functionality in a better kind of way.
- There are still some bugs in the chat section of the application, it's need to be fixed with proper way.
- Whenever the new user chats with new peers their name are not recognized by the application, it'll be fixed soon.
- Implement the CI/CD pipeline for ease of developement.

## Bonus🔽
<p><b>
If you have any idea/suggestions regarding the project, you can also contribute to the project by raising a PR
For any suggestion mail me at 👉  <a href="opencontainer255@gmail.com">Email</a>
</b></p>
