import React from "react";
import Unity, {UnityContext, UnityContent}from 'react-unity-webgl';

// const unityContent = new UnityContent(
//   "HotDogStandBuild/HotDogStand_WebGL.json",
//   "HotDogStandBuild/UnityLoader.js"
// );

const HotDogStandPage = () => {
  return (
    <>
        <h1>Hot Dog Stand</h1>
        {/* <Unity unityContent={unityContent} height="800px" width="900px"/> */}
    </>
  );
};

  
  export default HotDogStandPage;