import React from "react";
import EmojiIcon from "./emoji-icon/emoji-icon";
import Benefits from "./benefits/benefits";
import HeroImage from "./hero-image/hero-image";
import EnrollButton from "../shared/enroll-button";
import Image from "next/image";

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen px-5 xl:px-0 py-14 relative  bg-gray-300"
    >
      <Image
        className="z-1 absolute top-0 left-0 w-full h-full opacity-40"
        alt="bg"
        src="/hero/background.jpg"
        width={1000}
        height={667}
      />
      <div className="flex z-10 flex-col h-full items-center">
        <div className="w-full text-center  z-10 xl:w-1/2 gap-2 flex flex-col">
          <h1 className="text-5xl font-black">
            Conviertete en un{" "}
            <b className="bg-primary text-white px-2">experto</b> en
            Tanatopraxia y Tanatoestética con nuestro curso
          </h1>
          <p>
            Prepárate para destacar en un sector de vital importancia, desde
            colaborar en prestigiosas funerarias y laboratorios especializados
            hasta innovar en centros de enseñanza.
          </p>
        </div>
        <EnrollButton className="mt-5  z-10" />

        <div className="w-full z-10 text-center xl:w-1/2 px-5 mt-10 gap-2 flex flex-col">
          <HeroImage />
        </div>

        <div className="flex gap-3  z-10 lg:justify-between xl:w-1/2 px-5 w-full flex-col lg:flex-row mt-5 ">
          <Benefits
            icon="/emojis/books.svg"
            title="Modalidad Online/Híbrida"
            className="bg-primaryLight"
          />
          <Benefits
            icon="/emojis/alarmClock.svg"
            title="Duración de 6 meses"
            className="bg-secondaryLight"
          />
          <Benefits
            icon="/emojis/nerd.svg"
            title="Acompañamiento personalizado"
            className="bg-tertiaryLight"
          />
        </div>

        <EmojiIcon
          emojiImagePath="/emojis/skull.svg"
          className="top-60 left-60 float-2"
        />
        <EmojiIcon
          emojiImagePath="/emojis/whiteboard.svg"
          className="top-1/2 left-44 float"
        />
        <EmojiIcon
          emojiImagePath="/emojis/graduationCap.svg"
          className="bottom-44 left-64 float-3"
        />
        <EmojiIcon
          emojiImagePath="/emojis/videoCall.svg"
          className="bottom-32 right-64 float"
        />
        <EmojiIcon
          emojiImagePath="/emojis/faceMonocle.svg"
          className="bottom-1/2 right-44 float-3"
        />
        <EmojiIcon
          emojiImagePath="/emojis/books2.svg"
          className="top-52 right-72 float-2"
        />
      </div>
    </section>
  );
}

export default HeroSection;
