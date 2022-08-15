import React from 'react';
import {ColorTask} from "../ColorTask/ColorTask";

interface TaskItemProps {
   color: string
   label: string
}

export const TaskItem:React.FC<TaskItemProps> = ({color, label}) => {
   return (
      <div>
         <li>
            {
               !color && (
                  <i>
                     <img src="images/list.svg" alt="list-img"/>
                  </i>
               )
            }
            <i>
               <ColorTask color={color} />
            </i>
            <span>
                {label}
              </span>
            {
               color && (
                  <img
                     className="list__remove-icon"
                     src="images/remove.svg"
                     alt="remove-img"
                  />
               )
            }
         </li>
      </div>
   );
};

