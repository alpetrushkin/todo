import React from 'react'
import {TodoSidebar} from "./components/TodoSidebar/TodoSidebar";
import {ContentTask} from "./components/ContentTask/ContentTask";

function App() {
   return (
      <div id="app">
         <div className="todo">
            <TodoSidebar/>
            <ContentTask/>
         </div>
      </div>
   )
}

export default App
