import React from "react";
import "./App.css";
import ImageList from "./components/CardContainer/ImageList";

function App() {

  return (
    <div className="photo-container">
      <h1>NASA Photo of the Day</h1>
      <div className="images">
        <ImageList />
      </div>
    </div>
  );
}

export default App;
