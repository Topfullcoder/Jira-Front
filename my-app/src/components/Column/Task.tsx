import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task(props: any) {
  const { id, index, title } = props;
  let style = {
    backgroundColor: "red",
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 style={style}>{title}</h4>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
