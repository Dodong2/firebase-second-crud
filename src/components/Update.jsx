/****** react library ******/
import { useState } from "react"
import PropTypes from "prop-types"
// import { useNavigate } from "react-router-dom";
/****** firebase ******/
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config"
/****** react library ******/

const Update = ({ todo, onClose, onUpdate }) => {
//hooks
    const [username, setUsername] = useState(todo.username)
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
//logics
    const handleUpdate = async (e) => {
        e.preventDefault();
        const todoDoc = doc(db, "todos", todo.id)
        const newFields = {username, title, description}
        await updateDoc(todoDoc, newFields)
        onUpdate({ ...todo, username, title, description })
        onClose()
    }
  return (
    <>
      <div className='update'>
      <form onSubmit={handleUpdate}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username..."/>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..."/>
        <textarea rows={10} type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description..."/>
        <div className="update-btn">
        <button type="submit">Save</button>
        <button onClick={onClose}>Cancel</button>
        </div>
        </form>
      </div>
    </>
  )
}

Update.propTypes = {
  todo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};


export default Update
