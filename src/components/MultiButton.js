//https://learning.flatironschool.com/courses/4986/assignments/165695?module_item_id=357564

// import React from "react";

// function MultiButton() {
//   function handleClick(number) {
//     console.log(`Button ${number} was clicked`);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Button 1</button>
//       <button onClick={handleClick}>Button 2</button>
//       <button onClick={handleClick}>Button 3</button>
//     </div>
//   );
// }

// export default MultiButton;



//Need to provide a function definition, not a function invocation to our event handlers
//The diff't buttons will now console out as each Button that was pressed
//By writing out an arrow function here, we're providing each of our button's onClick handlers a function definition that will only be invoked when the button is clicked.
import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;

