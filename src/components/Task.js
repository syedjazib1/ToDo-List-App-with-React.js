import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Task = ({ task, onDelete, onEdit }) => {
    return (
      <div>
        <div class="task">
    <div>
      <p class="taskName">
        <span class="textBold">Task Name:</span> {task.text}
      </p>
      <p class="taskDate">
        <span class="textBold">Date of Completion:</span> {task.day}
      </p>
    </div>
    <div>
      <p><FaTimes onClick={() => onDelete(task.id)} class="delIcon" /></p>
      <p><FaPencilAlt onClick={() => onEdit(task.id)} class="editIcon" /></p>
    </div>
  </div>
      </div>
    )
}
export default Task;