import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Button(props) {
  return (
    <button
      className={
        props.className +
        " bg-blue-200 px-8 rounded-lg bg-opacity-70 py-2 hover:bg-opacity-100 transition-all"
      }
    >
      {props.children}
    </button>
  );
}

function Banner() {
  const [showPlayer, setShowPlayer] = React.useState(false);
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center">
      <img
        data-aos="fade-up"
        src="/img/both-1.jpeg"
        className="absolute -z-10 left-0 top-0 w-full h-full object-cover"
        style={{ opacity: "50%" }}
        alt=""
      />
      <p className="mb-2 font-extralight">The wedding of</p>
      <h1 className="italic text-5xl">
        <div className="w-[130px] h-[180px] flex flex-col justify-center">
          <div className="text-left">Afifa</div>
          <div>&</div>
          <div className="ml-[30px] text-right">Syafiq</div>
        </div>
      </h1>
      <div className="absolute top-2 right-2 flex items-end">
        <ReactAudioPlayer
          src="/music/akuma-no-ko.mp3"
          controls={showPlayer}
          autoPlay={true}
        />
        <div
          className="bg-blue-300 opacity-80 text-white flex justify-center items-center rounded-full h-10 w-10 ml-2 cursor-pointer"
          onClick={() => setShowPlayer(!showPlayer)}
        >
          <FontAwesomeIcon icon={faMusic} className="mr-[2px] h-4" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
