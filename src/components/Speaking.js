import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Speaking.css";

function Speaking() {
  return (
    <div className="buttons">
      <button
        className="btn1 btn fas fa-microphone-alt"
        // onClick={SpeechRecognition.startListening}
        onClick={SpeechRecognition.startListening({ continuous: true })}
      ></button>
      <button
        className="btn2 btn fas fa-ban"
        onClick={SpeechRecognition.stopListening}
      ></button>
    </div>
  );
}

export default Speaking;
