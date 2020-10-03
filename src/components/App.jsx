import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {
    return <div>
        <Header />
        {notes.map(noteCard => 
            (
                <Note key={noteCard.key} cardTitle={noteCard.title} cardContent={noteCard.content} />
            )
        )}
        <Footer />
    </div>
}

export default App;