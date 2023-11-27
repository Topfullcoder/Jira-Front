import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface Task {
  id: number;
  title: string;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
  },
  {
    id: 2,
    title: "Task 2",
  },
  {
    id: 3,
    title: "Task 3",
  },
];

function BeautifulDnd() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    console.log(result);
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newTaskIds = [...tasks]; // Create a copy of the array
    const [removed] = newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, removed);
    console.log(newTaskIds);
    setTasks(newTaskIds);
  };

  return (
    <div style={{ width: "500px" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="blog-list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ padding: "10px", border: "1px solid" }}
            >
              {/* sdfsafdsa */}
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id.toString()}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div
                        style={{
                          padding: "20px",
                          border: "1px solid",
                          margin: "10px",
                        }}
                        // key={task.id.toString()}
                      >
                        {task.title}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default BeautifulDnd;
