import React from "react";
import Unity, {UnityContext, UnityContent}from 'react-unity-webgl';

const unityContent = new UnityContent(
  "QuestForFunctionsBuild/QuestForFunctions_WebGL.json",
  "QuestForFunctionsBuild/UnityLoader.js"
);

const QuestForFunctionsPage = () => {
  return (
    <>
        <h1>Quest For Functions</h1>
        <Unity unityContent={unityContent} height="800px" width="900px"/>
    </>
  );
};

  
  export default QuestForFunctionsPage;