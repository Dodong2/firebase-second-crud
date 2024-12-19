/****** react library ******/
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
/****** icons ******/
import { FaPlus } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
/****** firebase ******/
import { db } from "../firebase-config"
import {collection, getDocs, orderBy, query, doc, deleteDoc} from 'firebase/firestore'
/****** components ******/
import Update from "./Update";

const Tasks = () => {
//Hooks 
    const [todos, setTodos] = useState([])
    const todosCollections = collection(db, "todos")
    const [selectTodo, setSelectTodo] = useState(null)
    

//logics
    //get
    useEffect(() => {
        const getTodos = async () => {
            const q = query(todosCollections, orderBy("createdAt", "desc"))
            const data = await getDocs(q)
            setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getTodos()
    }, [])

    //delete
    const deleteTask = async(id) => {
      try {
      const taskDoc = doc(db, "todos", id)
      await deleteDoc(taskDoc)
      setTodos(todos.filter((todo) => todo.id !== id));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }

    const handleUpdateTodo = (updatedTodo) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
        )
      )
    }


  return (
    <>
      <div className="main">
      <div className="title-head">
      <h2>Todo</h2>
      <Link to="/add"><button><FaPlus /></button></Link>
      </div>
      {todos.map((todo) => (
        <div className="details" key={todo.id}>
          <details className="details__container">
            <summary className="details__summary">
              <h2 className="details__title">{todo.title}</h2>
            </summary>
          </details>
          <div className="details__desc">
            <div className="details__desc-inner">
            <p className="details__user"><CgProfile/>: {todo.username}</p>
              <h3>Description:</h3>
              <textarea rows={5}  value={todo.description} readOnly/><br/>
              <div className="details-btn">
              <button onClick={() => setSelectTodo(todo)}> <FaPencil/> </button>
              <button onClick={() => deleteTask(todo.id)}>
                <IoMdTrash />
              </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      
        {/* Show Update Component */}
        {selectTodo && (
          <Update todo={selectTodo} onClose={() => setSelectTodo(null)} onUpdate={handleUpdateTodo} />
        )}

    </>
  )
}

export default Tasks
