import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import "./StartPage.css";

import Note from "./Note";

function Notepad() {
    const [currentNote,setCurrentNote] = useState(0);
    const [notes, setNotes] = useState(
    localStorage.getItem("notes") === null 
    ? [{title: "# Enter title here",content: "# Enter title here", id:Date.now()}]
    : JSON.parse(localStorage.getItem("notes")) 
  )

    function addNote(){
      setNotes([...notes,{
        title: "# Enter title here",
        content: "# Enter title here",
        id:Date.now()
      }])
    }

    function deleteNote(e,id){
      e.stopPropagation()
    

        let copyNote = notes.filter((note)=>{
           return note.id !== id
        })

        setNotes(copyNote)
    }

    function changeCurrentNote(e,index){
        
        setCurrentNote(index)
    }
    function changesToNoteContent(text){
        let copyNote = [...notes];
        copyNote[currentNote].content = text;
       copyNote[currentNote].title = text.split("\n")[0];
        setNotes(copyNote)
    }
      useEffect(()=>{
          if(notes.length > 0){
             localStorage.setItem("notes",JSON.stringify(notes));
          }
      },[notes])

  return (
    <>
     <div className="container">
     <div className="left">
        <div className="heading">
            <h2>Notes</h2>
           <AddCircleRoundedIcon style={{cursor:"pointer"}} onClick={addNote}/>
        </div>
        <div className="notes-container">
              {notes.map((note,index)=>{
                return <Note key={index} deleteNote={deleteNote} currentId={index} id={note.id}  changeCurrentNote={changeCurrentNote} title={note.title} 
                isSelected={currentNote === index} />
              })}
        </div>
     </div>
      <div className="right" data-color-mode="light">
        <MDEditor height={"100%"} value={notes[currentNote].content}  onChange={(value) => changesToNoteContent(value)}  autoFocus />
      </div>
     </div>
    </>
  )
}

export default Notepad