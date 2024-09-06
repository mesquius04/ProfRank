import React, { useState } from 'react';
import './MySpace.css'; // Asegúrate de tener tus estilos en MySpace.css

function MySpace() {
  const [currentPage, setCurrentPage] = useState('todo');

  // Lógica para renderizar el contenido según la pestaña seleccionada
  const renderPage = () => {
    if (currentPage === 'todo') {
      return (
        <div id="todocontent">
          <div id="details">
          </div>
          <div id="horari">
          <div class="toggle-text">
            <span>Day</span>
            <span>Calendar</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox"/>
            <span class="slider"></span>
          </label>
          <div id="day">
            <button className='fletxa'/>
            06/09
            <button className='fletxa'/>
          </div>
            <div id="day">
              <table>
                <tbody>
                  <tr><td>7h</td></tr>
                  <tr><td>8h</td></tr>
                  <tr><td>9h</td></tr>
                  <tr><td>10h</td></tr>
                  <tr><td>11h</td></tr>
                  <tr><td>12h</td></tr>
                  <tr><td>13h</td></tr>
                  <tr><td>14h</td></tr>
                  <tr><td>15h</td></tr>
                  <tr><td>16h</td></tr>
                  <tr><td>17h</td></tr>
                  <tr><td>18h</td></tr>
                  <tr><td>19h</td></tr>
                  <tr><td>20h</td></tr>
                  <tr><td>21h</td></tr>
                  <tr><td>22h</td></tr>
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
