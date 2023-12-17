import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { Card, Input, Avatar, Tooltip, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Task } from "./../../Types/Task";
import "./ticketcard.css";
import { ArrColor } from "../../Data";
import { CustomInput } from "./../CustomInput/index";

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
  ticket: string;
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
  ticket,
  acceptanceCriteria,
}) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const save = (val: string) => {
    setValue(val);
    setEdit(false);
  };

  const close = () => {
    console.log(value);
    setEdit(false);
  };

  const editButtonClick = () => {
    setEdit(true);
  };

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          className="task"
          {...provided.draggableProps}
          ref={provided.innerRef}
          draggable
          {...provided.dragHandleProps}
        >
          <div className="t_head">
            <div>
              {!edit ? (
                <Tooltip title={value} placement="top">
                  {value}
                </Tooltip>
              ) : (
                <CustomInput
                  defaultValue={value}
                  saveText={save}
                  cancelEdit={close}
                />
              )}
            </div>
            <div className="edit-display">
              <Tooltip title="Edit Summary" placement="top">
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={editButtonClick}
                >
                  <EditOutlined />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="t_content">
            <span
              style={{
                color: "black",
                backgroundColor: "#dfd8fd",
                fontWeight: 600,
              }}
            >
              {acceptanceCriteria}
            </span>
          </div>
          <div className="t_botton">
            <div className="progressing">
              <Tooltip title={ticket} placement="top">
                {ticket}
              </Tooltip>
            </div>
            <div className="userIconWraper">
              <Tooltip title={user} placement="top">
                <Avatar
                  style={{
                    backgroundColor:
                      ArrColor[user.toUpperCase().charCodeAt(0) - 65],
                  }}
                >
                  {user[0]}
                </Avatar>
              </Tooltip>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const App: React.FC<AppProps> = ({ title, tasks, draggableId, index }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const save = (val: string) => {
    setValue(val);
    setEdit(false);
  };

  const close = () => {
    console.log(value);
    setEdit(false);
  };

  const handleClick = () => {
    setEdit(true);
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
      ticket={task.ticketNumber}
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
              {!edit ? (
                <span onDoubleClick={handleClick}>{value}</span>
              ) : (
                <CustomInput
                  defaultValue={value}
                  saveText={save}
                  cancelEdit={close}
                />
              )}
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
