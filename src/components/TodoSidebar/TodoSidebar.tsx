import React from 'react';
import {AddList} from "../AddList/AddList";
import {TaskList} from "../TaskList/TaskList";

export const TodoSidebar = () => {
   return (
      <div className="todo__sidebar">
         <TaskList/>
         <AddList/>
      </div>
   );
};

