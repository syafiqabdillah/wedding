import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import { isSafari } from "../utils/browser";

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

function SafariPlayer() {
  const [muted, setMuted] = React.useState(true);

  return (
    <ReactAudioPlayer
      src="/music/akuma-no-ko.mp3"
      controls={true}
      autoPlay={true}
      muted={false}
      loop={true}
      volume={0.3}
      className="absolute top-2"
    />
  );
}

function DefaultPlayer() {
  const [showPlayer, setShowPlayer] = React.useState(false);
  const [muted, setMuted] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setMuted(false);
    }, 1500);
  }, []);

  return (
    <div className="absolute top-2 right-2 flex items-end">
      <ReactAudioPlayer
        src="/music/akuma-no-ko.mp3"
        controls={showPlayer}
        autoPlay={true}
        muted={muted}
        loop={true}
        volume={0.3}
        onPlay={() => console.log("play")}
      />
      <div
        className="bg-blue-300 opacity-50 hover:opacity-80 text-white flex justify-center items-center rounded-full p-4 h-12 w-12 ml-2 cursor-pointer"
        onClick={() => setShowPlayer(!showPlayer)}
      >
        <FontAwesomeIcon icon={faMusic} className="mr-[2px]" />
      </div>
    </div>
  );
}

function Banner() {
  const [safari, setSafari] = React.useState(false)

  React.useEffect(() => {
    setSafari(isSafari())
  }, [])
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center">
      <img
        src="/img/afifasyafiq.webp"
        className="absolute -z-10 left-0 top-0 w-full h-full object-cover"
        style={{ opacity: "50%" }}
        alt=""
      />
      <p className="mb-4 font-extralight">The wedding of</p>
      <h1 className="italic text-5xl">
        <div className="w-[130px] h-[180px] flex flex-col gap-3 justify-center">
          <div data-aos="fade-right" className="font-macondo tracking-wider">
            Afifa
          </div>
          <div className="font-smooch">&</div>
          <div data-aos="fade-left" className="font-macondo tracking-wider">
            Syafiq
          </div>
        </div>
      </h1>
      {/* {safari ?
        <SafariPlayer />
        :
        <DefaultPlayer />
      } */}
    </section>
  );
}

export default Banner;
