import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";

function App(props) {
  const[addItem,setAddItem] = useState([]);
  const addNote = (note) =>{
      setAddItem((prevData)=>{
        return[...prevData,note];

      })  
  }
  const onDelete= (id) =>{
    setAddItem((olddata) =>
      olddata.filter((currdata,indx)=>{
        return indx !== id;
      })
    );
  };
  return (
    <>
    <div>
      <Header/>
      <Createnote passNote={addNote}/>
      <Note />
      {addItem.map((val,index)=>{
        return<Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      })}
      <Footer/>
    </div>
    </>
  );
}

export default App;
