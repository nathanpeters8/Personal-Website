import React from "react";
import Unity, {UnityContext, UnityContent}from 'react-unity-webgl';

const unityContent = new UnityContent(
  "AvalancheRunnerBuild/AvalancheRunner_WebGL.json",
  "AvalancheRunnerBuild/UnityLoader.js"
);

const GamePage = () => {
  return <Unity unityContent={unityContent} height="500px" width="900px"/>;
};

  
  export default GamePage;