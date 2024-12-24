/****** react library ******/
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
/****** Icons ******/
import { FaArrowLeftLong } from "react-icons/fa6";
/****** database ******/
import { db } from "../firebase-config"
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'

const Addtasks = () => {
//Hooks
    const [username, setUsername] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const todosCollections = collection(db, "todos")
    const navigate = useNavigate()

//logics
    const Addtasks = async (event) => {
        event.preventDefault();
        try{
        await addDoc(todosCollections, {
            username: username,
            title: title,
            description: description,
            createdAt: serverTimestamp()
        })
      setUsername("");
      setTitle("");
      setDescription("");
      alert("Task added successfully!");
      navigate("/task")
    } catch (error) {
        console.error("Error adding task:", error);
        alert("Error adding task, please try again!");
    }
    }

  return (
    <>
      <div className="create-task">
      <div className="back-btn"><Link to='/task'><button> <FaArrowLeftLong/> </button></Link></div>
      <form onSubmit={Addtasks}>
        <input type=""placeholder="Username..." onChange={(event) => setUsername(event.target.value)} required/> 
        <input type=""placeholder="Title..." onChange={(event) => setTitle(event.target.value)} required/> 
        <textarea rows={10} type=""placeholder="Description..." onChange={(event) => setDescription(event.target.value)} required/> 
        <div className="create-btn">
        <button type="submit">submit</button>
        </div>
        </form>
      </div>
    </>
  )
}

export default Addtasks
