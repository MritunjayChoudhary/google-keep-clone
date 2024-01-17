import React,{useState} from 'react'
import { IoIosAdd } from "react-icons/io";
import Button from '@mui/material/Button';
import './App.css';

const Createnote = (props) => {

  const[expand,setExpand] = useState(false);
  const[note,setNote]=useState({
    title:"",
    content:"",
  });


  const InputEvent = (event) =>{
    const{value,name} = event.target;

    setNote((prevData) =>{
      return{
            ...prevData,
            [name]:value,
  }})
  } 

  const addEvent = () =>{
    props.passNote(note);
    setNote({
      title:"",
      content:"",
    });
  }

  const expandIt= () =>{
    setExpand(true);
  };

  const backtonormal = () =>{
    setExpand(false);
  };
   
  return (
    <>
        <div className='main_note' onDoubleClick={backtonormal}>
        <form>
        {expand?
            <input 
            type='text' 
            value={note.title} 
            onChange={InputEvent} 
            name="title"  
            placeholder='Title'
            autoComplete='off'
            />
            :null}
            <textarea 
            rows="" 
            column="" 
            value={note.content} 
            onChange={InputEvent} 
            name='content' 
            placeholder='Write a note...'
            onClick={expandIt}
             />
            <Button onClick={addEvent}>
            <IoIosAdd className='plus-sign'/>
            </Button>
        </form>
        </div>
    </>
  )
}

export default Createnote
