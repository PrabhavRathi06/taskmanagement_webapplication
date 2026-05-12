import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import api from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks on load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      toast.error('Failed to fetch tasks');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await api.post('/tasks', taskData);
      setTasks([response.data, ...tasks]);
      toast.success('Task added!');
    } catch (error) {
      toast.error('Failed to add task');
      console.error(error);
    }
  };

  const handleUpdateTask = async (id, updatedData) => {
    try {
      const response = await api.put(`/tasks/${id}`, updatedData);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      if (updatedData.completed !== tasks.find(t => t._id === id).completed) {
        toast.success(updatedData.completed ? 'Task completed!' : 'Task unmarked');
      } else {
        toast.success('Task updated!');
      }
    } catch (error) {
      toast.error('Failed to update task');
      console.error(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
      toast.success('Task deleted!');
    } catch (error) {
      toast.error('Failed to delete task');
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <Toaster position="top-right" />
      <header className="app-header">
        <h1 className="app-title">TaskMaster</h1>
        <p className="app-subtitle">Organize your workflow efficiently</p>
      </header>

      <TaskForm onTaskAdded={handleAddTask} />

      {loading ? (
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading tasks...</div>
      ) : (
        <TaskList 
          tasks={tasks} 
          onTaskUpdated={handleUpdateTask} 
          onTaskDeleted={handleDeleteTask} 
        />
      )}
    </div>
  );
}

export default App;
