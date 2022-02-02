//https://learning.flatironschool.com/courses/4986/assignments/165695?module_item_id=357564

import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  /*ideally to separate the callback fn from the return*/
  return <button onClick={tickle}>Tickle me!</button>;
  /* Or if the event handler has limited logic and small enough to fit inline */
  // return <button onClick={() => console.log("haha")}>Tickle me!</button>;
}

export default Tickler;







/* One important thing to note about event listeners: you can only attach them to DOM elements, not React components.
Another scenario, where the handleClick is outside the App. App renders Clickable...
When the button is clicked, the callback reference points to the handleClick function which then console.logs the "click" */
// function Clickable() {
//   function handleClick() {
//     console.log("click");
//   }
//   return <button onClick={handleClick}>Click Me</button>;
// }

// function App() {
//   return <Clickable />;
// }


/////////////////////////the callback fn is passed down as prop///////
/* Another example, where handleClick is called in the App

In this example, we're passing down a reference to the handleClick function as a prop called onClick to the Clickable component. 
  //Question:  the prop is onClick={handleClick}; with handleClick as a reference?
    // onClick is a prop to the Clickable component
    // and handleClick fn is being referenced 
    return <Clickable onClick={handleClick} />;

Then, we're using that prop {onClick} as the callback function for the <button> element's onClick attribute. 
  //Question: 
  // the button has an onClick attribute, which is using the prop `{onClick}` as the callback fn

    function Clickable({ onClick }) {
      return <button onClick={onClick}>Click Me</button>;
    }

That way, when the <button> element is clicked, the callback function handleClick will be called.
*/

// function Clickable({ onClick }) {
//   return <button onClick={onClick}>Click Me</button>;
// }

// function App() {
//   function handleClick() {
//     console.log("click");
//   }

//   return <Clickable onClick={handleClick} />;
// }