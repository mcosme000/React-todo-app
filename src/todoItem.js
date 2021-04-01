import React from "react";

export default function todoItem(props) {
  return (
    <div className="taskContainer">
      <input type="checkbox" checked={props.item.completed} />
      <p
        style={
          props.item.priority === "low"
            ? { backgroundColor: "#85BAA1" }
            : props.item.priority === "medium"
            ? { backgroundColor: "#F3DFA2" }
            : { backgroundColor: "#BB4430" }
        }
      >
        {props.task}
      </p>
    </div>
  );
}
