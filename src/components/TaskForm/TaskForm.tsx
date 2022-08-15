import React from 'react';

const TaskForm = () => {
   return (
      <div className="tasks__form">
         <div className="tasks__form-block">
            <input
               className="field"
               type="text"
               placeholder="Текст задачи"
            />
            <button className="button">
               Добавить задачу
            </button>
            <button className="button button--grey">
               Отмена
            </button>
         </div>
      </div>
   );
};

export default TaskForm;