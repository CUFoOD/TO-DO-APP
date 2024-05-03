import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    // Function to calculate completed tasks

    let length = todos.length;
    // console.log(length);
    let count = 0;
    todos.forEach(ravi => {
      if(ravi.checked === false){
        count = count+1;
      }
      
    });
    console.log(count);



let ans = length-count
    return ans


  
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
