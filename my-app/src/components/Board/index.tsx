import React, { useState } from "react";
import {
  Layout,
  Input,
  Menu,
  Breadcrumb,
  Card,
  Tag,
  Button,
  Typography,
  Avatar,
  Divider,
  Tooltip,
} from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  CheckCircleOutlined,
  PlusOutlined,
  SearchOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import Ticket from "./../Ticketbar";
import TicCard from "./../TicketCard";
import "./board.css";
const { Content } = Layout;

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
          <TicCard title="TODO" />
          <TicCard title="IN PROGRESS" />
          <TicCard title="TEST" />
          <TicCard title="DONE" />
          <TicCard title="DONE" />
          <TicCard title="DONE" />
          <TicCard title="DONE" />
        </div>
      </Content>
    </>
  );
};

export default SprintBoard;
