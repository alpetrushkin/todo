import React from 'react';
import {TaskItem} from "../TaskItem/TaskItem";

export const TaskList = () => {
   const tasks = [
      {
         ID:1,
         label: 'Все задачи',
         color: '',
      },
      {
         ID:2,
         label: 'Frontend',
         color: 'red',
      },
      {
         ID:3,
         label: 'Книги',
         color: 'green',
      },

   ]

   return (
      <div>
         <ul className="list">
            {
              tasks.map(item => (
                  <TaskItem color={item.color} label={item.label} key={item.ID}/>
               ))
            }
         </ul>
      </div>
   );
};

