import React from "react";
import "./Transcript.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Heading from "./Heading";

function Transcript() {
  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "open",
      callback: (site) => {
        window.open();
      },
    },
  ];

  const { resetTranscript, transcript } = useSpeechRecognition({ commands });

  return (
    <div className="transcript-wrapper">
      <div className="TranscriptBox">
        <Heading title="Your text will appear here" />
        <hr />
        <p>{transcript}</p>
      </div>
      <button className="btn2 btn fas fa-redo-alt" onClick={resetTranscript}>
        Reset
      </button>
    </div>
  );
}

export default Transcript;
