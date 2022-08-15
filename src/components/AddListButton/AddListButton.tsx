import React from 'react';

interface AddListButtonType {
   onClick: () => void
}

export const AddListButton: React.FC<AddListButtonType> = ({onClick}) => {
   return (
      <li onClick={()=> onClick ()} className="list__add-button">
         <i>
            <img
               src="images/add.svg"
               alt="add-img"
            />
         </i>
         <span >Добавить список</span>
      </li>
   );
};

