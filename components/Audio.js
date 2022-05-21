import React, { useState } from "react";

function Audio() {
  const [show, setShow] = useState(true);

  function playSound() {
    let audio = document.getElementById("audio");
    audio.play();
    setShow(false);
  }

  return (
    <div
      className={`fixed h-screen w-screen bg-gray-600 top-0 left-0 flex justify-center transition-all duration-1000 items-center ${
        show ? "bg-opacity-80" : "bg-opacity-0"
      }`}
    >
      {show && (
        <div
          onClick={playSound}
          className="bg-blue-200 font-macondo text-2xl cursor-pointer h-32 w-32 rounded-full flex justify-center items-center text-center z-10 opacity-100 animate-bounce"
        >
          Open Invitation
        </div>
      )}
      <audio src="/music/akuma-no-ko.mp3" id="audio" />
    </div>
  );
}

export default Audio;
