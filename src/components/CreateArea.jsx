import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

  const [expanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  } 

  return (
    <div>
      <form className="create-note">
        {expanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null }
        
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded ? "3" : "1"}
        />
        <Zoom in={expanded}>
          <Fab onClick={submitNote}>
            <AddIcon fontSize="large" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
