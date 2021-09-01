import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Button() {
  const { resetTranscript } = useSpeechRecognition();
  return (
    <div className="buttons">
      <button className="fas fa-redo-alt" onClick={resetTranscript}>
        Reset
      </button>
    </div>
  );
}

export default Button;
