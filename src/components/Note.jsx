
import DeleteIcon from '@mui/icons-material/Delete';

function Note({deleteNote , id , changeCurrentNote , title , currentId , isSelected}) {
  return (
    <>
     <div className={`note ${isSelected ? 'selected' : ''}`}  onClick={(e)=>{changeCurrentNote(e,currentId)}}>
        <p>{title}</p>
        <DeleteIcon onClick={(e)=>{deleteNote(e,id)}} />
      
     </div>
    </>
  )
}

export default Note