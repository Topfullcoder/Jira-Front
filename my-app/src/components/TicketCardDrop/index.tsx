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
    description: "I wake up 6 am",
  },
  {
    description: "I wake up 6 am",
  },
  {
    description: "I wake up 6 am",
  },
  {
    description: "I wake up 6 am",
  },
  {
    description: "I wake up 6 am",
  },
  {
    description: "I wake up 6 am",
  },
];

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
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event?.currentTarget.id);
  };
  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    console.log(`Somebody dropped an element with id: ${id}`);
  };
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
      onDragOver={enableDropping}
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      id={title}
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
      {cardinfo?.map((card, idx) => (
        <CustomCard
          key={idx}
          title={`Card ${idx + 1}`}
          description={card.description}
        />
      ))}
    </Card>
  );
};

export default App;
