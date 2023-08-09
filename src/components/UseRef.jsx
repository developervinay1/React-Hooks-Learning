import React, { useRef } from "react";

export default function UseRef() {
  const videoReference = useRef();
  console.log(videoReference.current);
  const handlePLay = () => {
    videoReference.current.play();
  };
  const handlePause = () => {
    videoReference.current.pause();
  };
  return (
    <div id="videoWrapper">
      <div id="buttonWrapper">
        <button onClick={handlePLay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>

      <video width={520} height={520} ref={videoReference}>
        <source src="/Videos/refVideo.mp4"></source>
      </video>
    </div>
  );
}
