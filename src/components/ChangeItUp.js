//https://learning.flatironschool.com/courses/4986/assignments/165695?module_item_id=357564

//onChange works for tags: <input>, <select> and <textarea>
//...anywhere where we need to capture the user's input

import React from "react";

function ChangeItUp() {
  function handleChange(event) {
    console.log(`${event.target.name}: ${event.target.value}`);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        placeholder="Enter search term..."
      />

      <select name="filter" onChange={handleChange}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default ChangeItUp;
