import { useState } from 'react';
import { Edit2, Trash2, Check, X } from 'lucide-react';

export default function TaskItem({ task, onTaskUpdated, onTaskDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');

  const handleToggleStatus = () => {
    onTaskUpdated(task._id, { ...task, completed: !task.completed });
  };

  const handleSaveEdit = () => {
    if (!editTitle.trim()) return;
    onTaskUpdated(task._id, { ...task, title: editTitle, description: editDescription });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <div className="edit-form">
          <input
            type="text"
            className="form-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
          />
          <input
            type="text"
            className="form-input"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description"
          />
          <div className="edit-actions">
            <button className="btn-primary btn-sm" onClick={handleSaveEdit}>
              <Check size={16} /> Save
            </button>
            <button className="btn-secondary btn-sm" onClick={() => setIsEditing(false)}>
              <X size={16} /> Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={handleToggleStatus}
        />
      </div>
      
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && <p className="task-desc">{task.description}</p>}
      </div>

      <div className="task-actions">
        <button 
          className="action-btn" 
          onClick={() => setIsEditing(true)}
          aria-label="Edit Task"
        >
          <Edit2 size={18} />
        </button>
        <button 
          className="action-btn delete" 
          onClick={() => onTaskDeleted(task._id)}
          aria-label="Delete Task"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
