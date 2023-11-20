import React, { useState } from "react";
import { Layout, Input, Typography, Avatar, Tooltip } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import TicCard from "./../TicketCard";
import "./board.css";

const { Content } = Layout;

interface Task {
  status: string;
  time: string;
  days: string;
  name: string;
  image: React.ReactNode; // Specify the type as React.ReactNode
  id: number;
  done: boolean;
  newOrder: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TodoList: Task[] = [
  {
    id: 1,
    status: "New Order",
    image: <UserOutlined />,
    time: "8 hrs",
    days: "5 days left",
    name: "Task 1",
    done: false,
    newOrder: true,
  },
  {
    id: 2,
    status: "In Progress",
    image: <UserOutlined />,
    time: "6 hrs",
    days: "6 days left",
    done: false,
    name: "Task 2",
    newOrder: true,
  },
  {
    id: 3,
    status: "Completed",
    image: <UserOutlined />,
    time: "13 hrs",
    days: "4 days left",
    done: false,
    name: "Task 3",
    newOrder: true,
  },
  {
    id: 4,
    status: "New Order",
    image: <UserOutlined />,
    time: "22 hrs",
    days: "2 days left",
    done: true,
    name: "Task 4",
    newOrder: false,
  },
  {
    id: 5,
    status: "In Progress",
    image: <UserOutlined />,
    time: "2 hrs",
    days: "1 day left",
    newOrder: true,
    done: false,
    name: "Task 5",
  },
  {
    id: 6,
    status: "Completed",
    image: <UserOutlined />,
    time: "20 hrs",
    days: "11 days left",
    done: true,
    newOrder: false,
    name: "Task 6",
  },
  {
    id: 7, // Changed the ID to 7 as 5 was repeated
    status: "Delivered",
    image: <UserOutlined />,
    time: "2 hrs",
    days: "1 day left",
    done: false,
    name: "Task 7",
    newOrder: false,
  },
];

const ProgressList: Task[] = [];

const SprintBoard = () => {
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [searchStyle, setSearchStyle] = useState({ width: "100px" });

  const handleFocus = () => {
    setSearchStyle({ width: "150px" });
    setSearchPlaceholder("Search this board");
  };

  const handleBlur = () => {
    setSearchStyle({ width: "100px" });
    setSearchPlaceholder("");
  };

  const avatars = [
    {
      title: "Kanban",
      style: {
        backgroundColor: "#fde3cf",
      },
    },
    {
      title: "Light",
      style: {
        backgroundColor: "#f56a00",
      },
    },
    {
      title: "Ghost",
      style: {
        backgroundColor: "#87d068",
      },
    },
    {
      title: "Spider",
      style: {
        backgroundColor: "#1677ff",
      },
    },
  ];

  return (
    <>
      <div className="app-left-header">
        <div className="header-title">
          <Typography.Title level={4} style={{ margin: 0 }}>
            LIG Sprint
          </Typography.Title>
        </div>
        <div className="app-search">
          <Input
            suffix={<SearchOutlined />}
            placeholder={searchPlaceholder}
            style={searchStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Avatar.Group>
            {avatars.map((avatar, idx) => (
              <Tooltip key={idx} title={avatar.title} placement="bottom">
                <Avatar style={avatar.style}>{avatar.title[0]}</Avatar>
              </Tooltip>
            ))}
            <Tooltip title="Add people" placement="bottom">
              <Avatar icon={<UserAddOutlined />} />
            </Tooltip>
          </Avatar.Group>
        </div>
      </div>
      <Content style={{ padding: "0 50px" }}>
        <div className="app-top-between" />
        <div className="app-board">
          <TicCard title="TODO" tasks={TodoList} />
          <TicCard title="IN PROGRESS" tasks={ProgressList} />
        </div>
      </Content>
    </>
  );
};

export default SprintBoard;
