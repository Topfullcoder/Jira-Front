import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
  textAlign: "center",
};

interface AppProps {
  title: string;
  tasks: Task[];
}

interface CustomCardProps {
  task: Task;
}

const initialTasks = [
  {
    key: 1,
    title: "Task 1",
  },
  {
    key: 2,
    title: "Task 2",
  },
  {
    key: 3,
    title: "Task 3",
  },
];

const CustomCard: React.FC<CustomCardProps> = ({ task }) => {
  return (
    <Card
      style={gridStyle}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      title={task.title}
    >
      <Meta
        avatar={
          <Avatar
            src={
              <Tooltip title={task.reporters[0].username} placement="top">
                <Avatar style={{ backgroundColor: "#87d068" }}>
                  {task.reporters[0].username[0]}
                </Avatar>
              </Tooltip>
            }
          />
        }
      />
      {task.description}
    </Card>
  );
};

const App: React.FC<AppProps> = ({ title, tasks }) => {
  const [cardTitle, setCardTitle] = useState(title);
  const [tickets, setTickets] = useState(tasks);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardTitle(value);
  };

  return (
    <Card
      className="app-card-header"
      title={
        <Input
          placeholder="Borderless"
          bordered={false}
          value={cardTitle}
          onChange={handleTitleChange}
        />
      }
      style={{ width: "20%", height: "fit-content" }}
      bordered={true}
      size="small"
      headStyle={{
        display: "contents",
        position: "sticky",
        zIndex: 4, // Removed quotes around 4
        backgroundColor: "gray",
      }}
    >
      {tickets.map((ticket, id) => (
        <CustomCard key={id} task={ticket} />
      ))}
    </Card>
  );
};

export default App;
