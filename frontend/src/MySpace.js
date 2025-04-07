import React, { useState } from 'react';
import { useUser } from './context/UserContext';
import './MySpace.css';

// Helper para formatear la fecha
const formatDate = (date) => {
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
};

function MySpace() {
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState('todo');
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas
  const [newTask, setNewTask] = useState({ time: '7h', duration: 1, description: '' });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTask, setSelectedTask] = useState(null); // Estado para la tarea seleccionada (detalles)

  const maxFutureDate = new Date(); 
  maxFutureDate.setMonth(maxFutureDate.getMonth() + 2);

  const minPastDate = new Date();
  minPastDate.setDate(minPastDate.getDate() - 7);

  // Función para cambiar el día
  const changeDay = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + direction);

    if (newDate <= maxFutureDate && newDate >= minPastDate) {
      setSelectedDate(newDate);
    }
  };

  // Lógica para agregar una tarea
  const addTask = () => {
    setTasks([...tasks, { ...newTask, date: formatDate(selectedDate) }]); // Agrega la nueva tarea con la fecha seleccionada
    setNewTask({ time: '7h', duration: 1, description: '' });
  };

  // Lógica para renderizar las tareas en las celdas de la tabla
  const renderTask = (hour) => {
    const task = tasks.find(t => t.time === hour && t.date === formatDate(selectedDate)); // Busca tareas por hora y fecha
    if (task) {
      return (
        <div
          className="task"
          style={{ height: `${task.duration * 50}px` }}
          onClick={() => setSelectedTask(task)} // Mostrar detalles al hacer clic
        >
          {task.description}
        </div>
      );
    }
    return null;
  };

  // Lógica para renderizar el contenido según la pestaña seleccionada
  const renderPage = () => {
    console.log(user);
    if (currentPage === 'todo') {
      return (
        <div id="todocontent">
          <div id="details">
            {selectedTask ? (
              <div>
                <h3>Detalles de la tarea</h3>
                <p>Descripción: {selectedTask.description}</p>
                <p>Hora: {selectedTask.time}</p>
                <p>Duración: {selectedTask.duration} hora(s)</p>
              </div>
            ) : (
              <p>Haz clic en una tarea para ver los detalles {user?.role}</p>
            
            )}
          </div>

          <div id="horari">
            <div className="toggle-text">
              <span>Day</span>
              <span>Calendar</span>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <div id="daychange">
              <button className="fletxa" onClick={() => changeDay(-1)}>⬅</button>
              {formatDate(selectedDate)}
              <button className="fletxa" onClick={() => changeDay(1)}>➡</button>
            </div>
            <div id="day">
              <table>
                <tbody>
                  {['7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h'].map((hour) => (
                    <tr key={hour}>
                      <td id="task">{renderTask(hour)}</td>
                      <td id="hours">{hour}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button id="tasks">TASKS</button>
          </div>
        </div>
      );
    } else if (currentPage === 'courses') {
      return (
        <div id="coursescontent">
          <p>This is the content of the second internal page (Courses).</p>
        </div>
      );
    }
  };

  return (
    <div className="myspace-container">
      <nav className="tabs">
        <span
          className={`tab ${currentPage === 'todo' ? 'active' : ''}`}
          onClick={() => setCurrentPage('todo')}
        >
          ToDo
        </span>
        <span
          className={`tab ${currentPage === 'courses' ? 'active' : ''}`}
          onClick={() => setCurrentPage('courses')}
        >
          Courses
        </span>
      </nav>

      <div className="content-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default MySpace;
