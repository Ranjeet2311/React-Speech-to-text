import React from "react";
import "./App.css";
import { useSpeechRecognition } from "react-speech-recognition";
import Heading from "./components/Heading";
import Speaking from "./components/Speaking";
import Transcript from "./components/Transcript";

const App = () => {
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="app">
      <div className="app-wrapper">
        <Heading title="Text to voice converter (English -US)" />
        <Speaking />
        <Transcript />
        <Heading para="say 'RESET' to reset or hit the button" />
      </div>
    </div>
  );
};
export default App;
