import React, { useState } from "react";
import {
  Avatar,
  Button,
  Input,
  Modal,
  Radio,
  Space,
  Table,
  Tag,
  Tooltip,
} from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import {
  SearchOutlined,
  UserAddOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { ArrColor } from "../../Data";

import CreateCard from "../../components/CreateProject";
import "./project.css";

interface DataType {
  key: string;
  name: string;
  type: string;
  lead: string;
  tags: string[];
}

type TablePaginationPosition = NonNullable<
  TablePaginationConfig["position"]
>[number];

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => {
      if (typeof a.name === "string" && typeof b.name === "string") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    },
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Lead",
    dataIndex: "lead",
    key: "lead",
    render: (lead: string) => (
      <span>
        {
          <Tooltip title={lead} placement="top">
            <Avatar
              style={{ backgroundColor: ArrColor[lead.charCodeAt(0) - 65] }}
            >
              {lead[0]}
            </Avatar>
          </Tooltip>
        }
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Project settings</a>
        <a>Move to trash</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "LIG",
    name: "Light",
    type: "Team-managed software",
    lead: "Light",
    tags: ["nice", "developer"],
  },
  {
    key: "MON",
    name: "Monkey",
    type: "Team-managed software",
    lead: "Light",
    tags: ["loser"],
  },
  {
    key: "Tim",
    name: "Timesheet",
    type: "Team-managed software",
    lead: "Briam",
    tags: ["cool", "teacher"],
  },
];

const Search = Input.Search;

const App: React.FC = () => {
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [searchStyle, setSearchStyle] = useState({ width: "150px" });
  const [isCreate, setIsCreate] = useState(false);

  const showModal = async () => {
    setIsCreate(true);
  };

  const handleCancel = () => {
    setIsCreate(false);
  };

  return (
    <div className="project-landing">
      <div className="project-container">
        <h1 id="project-title">Projects</h1>
        <div className="project-actions">
          <Input
            suffix={<SearchOutlined />}
            placeholder="Search Project"
            style={searchStyle}
          />

          <button id="create-project-btn" onClick={showModal}>
            Create Project
          </button>
          <Modal open={isCreate} onCancel={handleCancel} footer={null}>
            <CreateCard onCreate={handleCancel} />
          </Modal>
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          pagination={{ position: ["bottomLeft"], pageSize: 10 }}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default App;
