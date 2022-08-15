import React from 'react';

interface ColorTaskType {
   color: string
}

export const ColorTask: React.FC<ColorTaskType> = ({color}) => {
   return (
      <i
         className={`badge badge--${color}`}
      >
      </i>
   );
};

