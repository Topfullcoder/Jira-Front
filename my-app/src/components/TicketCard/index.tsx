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

const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

interface AppProps {
  title: string;
}

interface CardProps {
  title: string;
  description: string;
}

const CustomCard: React.FC<CardProps> = ({ title, description }) => {

  

  return (
    <Card
      style={gridStyle}
      type="inner"
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      draggable={true}
    >
      <Meta
        avatar={
          <Avatar
            src={
              <Tooltip title="Unassigned" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
            }
          />
        }
        title={title}
        description={description}
      />
    </Card>
  );
};

const App: React.FC<AppProps> = ({ title }) => {
  const [cardtitle, setCardtitle] = useState(title);
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardtitle(value);
  };
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
    >
      <CustomCard title="Card 1" description="Make sense" />
      <CustomCard title="Card 2" description="Going to school" />
      <CustomCard title="Card 2" description="Lunch" />
      <CustomCard title="Card 3" description="GO to sleep" />
      <CustomCard title="Card 4" description="homework" />
    </Card>
  );
};

export default App;
