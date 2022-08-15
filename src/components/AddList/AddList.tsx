import React, {useState} from 'react';
import {AddListButton} from "../AddListButton/AddListButton";
import {AddListPopup} from "../AddListPopup/AddListPopup";

export const AddList = () => {
   const [visibale, setVisibale] = useState(false)

   const onClose = () => {
      setVisibale(false)
   }

   const onOpen = () => {
      setVisibale(true)
   }

   return (
      <div className="add-list">
         <ul className="list">
            {
               visibale
                  ? <AddListPopup onClose={() => onClose()}/>
                  : <AddListButton onClick={() => onOpen()}/>
            }
         </ul>
      </div>
   );
};

