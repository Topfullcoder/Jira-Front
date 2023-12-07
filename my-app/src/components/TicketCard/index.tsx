import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { Card, Input, Avatar, Tooltip } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Task } from "./../../Types/Task";
import "./ticketcard.css";

const { Meta } = Card;

const gridStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "10px",
  textAlign: "center",
};

interface AppProps {
  title: string;
  tasks: Task[];
  draggableId: string;
  index: number;
}

interface CustomCardProps {
  task: Task;
  draggableId: string;
  index: number;
  taskId: string;
  user: string;
  storyPoint: number;
  description: string;
  title: string;
  acceptanceCriteria: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  task,
  draggableId,
  index,
  taskId,
  user,
  storyPoint,
  description,
  title,
  acceptanceCriteria,
}) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          // className="task"
          {...provided.draggableProps}
          ref={provided.innerRef}
          draggable
          {...provided.dragHandleProps}
        >
          <Card
            style={gridStyle}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            title={title}
          >
            <Meta
              avatar={
                <Avatar
                  src={
                    <Tooltip title={user} placement="top">
                      <Avatar style={{ backgroundColor: "#87d068" }}>
                        {user[0]}
                      </Avatar>
                    </Tooltip>
                  }
                />
              }
              description={acceptanceCriteria}
            />
          </Card>
        </div>
      )}
    </Draggable>
  );
};

const App: React.FC<AppProps> = ({ title, tasks, draggableId, index }) => {
  const [cardTitle, setCardTitle] = useState(title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardTitle(value);
  };

  const tasklist = tasks.map((task, idx) => (
    <CustomCard
      key={`task-${task.id.toString()}`}
      draggableId={`task-${task.id.toString()}`}
      index={idx}
      taskId={task.id.toString()}
      user={task.reporters[0].username}
      storyPoint={task.storyPoint}
      title={task.title}
      description={task.description}
      acceptanceCriteria={task.acceptanceCriteria}
      task={task}
    />
  ));

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          className="listBlock"
          {...provided.draggableProps}
          ref={provided.innerRef}
          draggable
        >
          <div className="blockHead" {...provided.dragHandleProps}>
            <div className="listName">
              <span>{title}</span>
            </div>
          </div>
          <Droppable droppableId={draggableId} type="task">
            {(provided, snapshot) => {
              return (
                <div
                  className="listContent"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasklist}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default App;
//   <Card
//   className="app-card-header"
//   title={
//     <Input
//       placeholder="Borderless"
//       bordered={false}
//       value={cardTitle}
//       onChange={handleTitleChange}
//     />
//   }
//   style={{ height: "fit-content" }}
//   bordered={true}
//   size="small"
//   headStyle={{
//     display: "contents",
//     position: "sticky",
//     zIndex: 4,
//     backgroundColor: "gray",
//   }}
//   {...provided.dragHandleProps}
// >
//   <Droppable droppableId={draggableId} type="task">
//     {(provided, snapshot) => {
//       return (
//         <div
//           className="listContent"
//           ref={provided.innerRef}
//           {...provided.droppableProps}
//         >
//           {/* {tasklist} */}
//           {provided.placeholder}
//         </div>
//       );
//     }}
//   </Droppable>
// </Card>
