import React from 'react';
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

interface AddListPopupType {
   onClose: () => void
}

export const AddListPopup: React.FC<AddListPopupType> = ({onClose}) => {
   return (
      <div className="add-list__popup">
         <img
            onClick={() => onClose()}
            src="images/close.svg"
            className="add-list__popup-close-btn"
            alt="Close button"
         />
         <Input />
         <div className="add-list__popup-colors">
            <i className="badge badge--grey"> </i>
            <i className="badge badge--lime"> </i>
            <i className="badge badge--purple"> </i>
            <i className="badge badge--black"> </i>
            <i className="badge badge--red"> </i>
            <i className="badge badge--green"> </i>
            <i className="badge badge--blue"> </i>
            <i className="badge badge--pink"> </i>
         </div>
         <Button />
      </div>
   );
};
