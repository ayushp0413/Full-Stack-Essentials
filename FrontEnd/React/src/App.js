import React from "react";
import "./App.css";
import MyDropzone from "./MyDropzone";


function App() {

  return (

    
    <div className="w-10/12 mt-24 px-4 py-4 mx-auto">
        <h1 className="mb-12">Drag and Drop Tutorial</h1>
        <MyDropzone />
    </div>
    
  );
}

export default App;

// Parent to Child communication is done through normal props 
// onA is a propFunction : which is used for communication from Child to Parent