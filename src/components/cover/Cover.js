import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Aktyum</h1>
      <p>Producer | DJ</p>
      https://www.youtube.com/watch?v=lbKs9Yklz7o&t=1417s&ab_channel=Re-OnMedia

      
  </div>;
};

export default Cover;
