import { Link } from "react-router-dom"
import todopic from '../assets/images/todo.svg'

const home = () => {
  return (
    <>
      <div className="main">
      <div className="introduction">
      <div className="todo-img">
        <img src={todopic} alt="todopic"/>
      </div>
      <h3><span>Stay</span> organized and get things done with our simple Todo App! Add, track, and complete your tasks effortlessly — start achieving your <span>goals today!</span></h3>
      <Link to='/task'><button>Get started</button></Link>
      </div>
      </div>
    </>
  )
}

export default home
