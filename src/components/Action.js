import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Action() {
  const { listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
    </div>
  );
}

export default Action;
