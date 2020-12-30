import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function noteKeeper(noteItem) {
  return (
    <div>
      <Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteKeeper)};
      <Footer />
    </div>
  );
}

export default App;
