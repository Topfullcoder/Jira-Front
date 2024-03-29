import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

function Column(props: any) {
  const { droppableId, list, type } = props;

  let style = {
    backgroundColor: "orange",
    height: "300px",
    width: "400px",
    margin: "100px",
  };

  console.log(
    "type = ",
    droppableId,
    list.map((v: any) => v.id)
  );

  return (
    <Droppable droppableId={droppableId} type={type}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={style}>
          <h2>{droppableId}</h2>

          {list.map((val: any, index: any) => {
            return (
              <Task id={val.id} key={val.id} index={index} title={val.title} />
            );
          })}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
