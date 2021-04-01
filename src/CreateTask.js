import React from "react";

export default function CreateTask() {
  function handleInput(e) {
    console.log("changing");
  }

  return (
    <form>
      <input onChange={handleInput} />
      <button type="submit">Add task</button>
    </form>
  );
}
