import React, { useState, useEffect } from "react";
import { Card, Input, Avatar, Tooltip } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./ticketcard.css";

const { Meta } = Card;

const cardinfo = [
  {
    id: 1,
    status: "New Order",
    image: <UserOutlined />,
    time: "8 hrs",
    days: "5 days left",
  },
  {
    id: 2,
    status: "In Progress",
    image: <UserOutlined />,
    time: "6 hrs",
    days: "6 days left",
    done: false,
  },
  {
    id: 3,
    status: "Completed",
    image: <UserOutlined />,
    time: "13 hrs",
    days: "4 days left",
  },
  {
    id: 4,
    status: "New Order",
    image: <UserOutlined />,
    time: "22 hrs",
    days: "2 days left",
    done: true,
  },
  {
    id: 5,
    status: "In Progress",
    image: <UserOutlined />,
    time: "2 hrs",
    days: "1 day left",
    newOrder: true,
    done: false,
  },
  {
    id: 6,
    status: "Completed",
    image: <UserOutlined />,
    time: "20 hrs",
    days: "11 days left",
    done: true,
  },
  {
    id: 5,
    status: "Delivered",
    image: <UserOutlined />,
    time: "2 hrs",
    days: "1 day left",
    done: false,
  },
];

const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

interface AppProps {
  title: string;
  tasks: TaskListProps;
}

interface Task {
  status: String;
  time: String;
  days: String;
  name: String;
  image: String;
  id: Number;
}

interface TaskListProps {
  tasks: Task[];
}

const CustomCard: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <Card
      style={gridStyle}
      type="inner"
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      title={task.status}
    >
      <Meta
        avatar={
          <Avatar
            src={
              <Tooltip title="Unassigned" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={task.image}
                />
              </Tooltip>
            }
          />
        }
      />
    </Card>
  );
};

const App: React.FC<AppProps> = ({ title, tasks }) => {
  const [cardtitle, setCardtitle] = useState(title);
  // const [taskList, setTaskList] = useState<Task[]>();

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardtitle(value);
  };

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plan", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove("dragged");
  };

  const onDragEnter = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };

  const onDragLeave = (evt: React.DragEvent<HTMLDivElement>) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget as HTMLElement;
    if (newTarget?.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };

  const onDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  // const onDrop = (
  //   evt: React.DragEvent<HTMLDivElement>,
  //   value: boolean,
  //   status: string
  // ) => {
  //   evt.preventDefault();
  //   evt.currentTarget.classList.remove("dragged-over");
  //   let data = evt.dataTransfer.getData("text/plain");
  //   let updated = taskList.map((task, idx) => {
  //     if (task.id.toString() === data.toString()) {
  //       task.status = status;
  //     }
  //     return task;
  //   });
  //   setTaskList(updated);
  // };

  // useEffect(() => {
  //   console.log("Updated Task List:", taskList);
  // }, [taskList]);

  // const filterTasksByStatus = (status: string) => {
  //   return taskList.filter((task) => task.status === status);
  // };

  return (
    <Card
      className="app-card-header"
      title={
        <Input
          placeholder="Borderless"
          bordered={false}
          value={cardtitle}
          onChange={handle}
        />
      }
      style={{ width: "20%", height: "fit-content" }}
      bordered={true}
      size="small"
      headStyle={{
        display: "contents",
        position: "sticky",
        zIndex: "4",
        backgroundColor: "gray",
      }}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      // onDrop={(e) => onDrop(e, false, "New Order")}
    ></Card>
  );
};

export default App;
