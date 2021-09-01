import React, { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Action from "./components/Action";
import Heading from "./components/Heading";
import Speaking from "./components/Speaking";
import Transcript from "./components/Transcript";
import Button from "./Button";

const App = () => {
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="app">
      <div className="app-wrapper">
        <Heading title="Text to voice converter (English -US)" />
        {/* <Action /> */}
        <Speaking />
        <Transcript />
        <Heading para="say 'RESET' to reset or hit the button" />
      </div>
    </div>
  );
};
export default App;

// ______________________________________________________
// import React, { useState } from "react";
// import "./App.css";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import Action from "./components/Action";
// import Heading from "./components/Heading";
// import Speaking from "./components/Speaking";
// import Transcript from "./components/Transcript";
// import Refresh from "./components/Refresh";

// const App = () => {
//   // const commands = [
//   //   {
//   //     command: "rest",
//   //     callback: ({ resetTranscript }) => resetTranscript(),
//   //   },
//   // ];

//   const { resetTranscript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();
//   // const { browserSupportsSpeechRecognition } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div className="app">
//       <div className="app-wrapper">
//         <Heading title="Text to voice converter (English -US)" />
//         {/* <button onClick={resetTranscript}>Reset</button> */}
//         <Transcript />
//         <Speaking />
//         <div className="">
//           <Action />
//           <Refresh />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;
