import React from "react";
import instagramLogo from "./images/ig-instagram.svg";
import appleLogo from "./images/apple-music.png";
import spotifyLogo from "./images/spotify.svg";
import album from "./images/album.png";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div class="sound-icon disabled">
        <div class="sound-wave">
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
          <i class="bar"></i>
        </div>
      </div>
      <img className="album" src={album} />
      <div className="container">
        <a className="link" href="https://www.instagram.com/tomerbeneliezer/">
          <img className="logo1" src={instagramLogo} />
        </a>
        <a className="link" href="https://apple.co/3nbcuGM">
          <img className="logo2" src={appleLogo} />
        </a>
        <a className="link" href="https://apple.co/3nbcuGM">
          <img className="logo3" src={spotifyLogo} />
        </a>
      </div>
    </div>
  );
};

export default App;
