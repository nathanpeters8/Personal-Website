import React from "react";
import Unity, {UnityContext, UnityContent}from 'react-unity-webgl';

const unityContent = new UnityContent(
  "AvalancheRunnerBuild/AvalancheRunner_WebGL.json",
  "AvalancheRunnerBuild/UnityLoader.js"
);

const AvalancheRunnerPage = () => {
  return (
    <>
        <h1>Avalanche Runner</h1>
        <Unity unityContent={unityContent} height="800px" width="900px"/>
        <h3>Controls</h3>
        <ul>
            <li>A - move left</li>
            <li>D - move right</li>
            <li>SPACE - Jump</li>
        </ul>
    </>
  );
};

  
  export default AvalancheRunnerPage;