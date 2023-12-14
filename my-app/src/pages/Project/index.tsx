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

import CreateCard from "../../components/CreateProjectSample";
import "./project.css";
import { right } from "@xstyled/system";

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
  const [searchStyle, setSearchStyle] = useState({ width: "100px" });
  const [isCreate, setIsCreate] = useState(false);

  const handleFocus = () => {
    setSearchStyle({ width: "150px" });
    setSearchPlaceholder("Search this board");
  };

  const handleBlur = () => {
    setSearchStyle({ width: "100px" });
    setSearchPlaceholder("");
  };

  const showModal = async () => {
    setIsCreate(true);
  };

  const handleCancel = () => {
    setIsCreate(false);
  };

  return (
    <div className="project-landing">
      <div className="project-head">
        <div className="top-head">
          <h1>Project</h1>
        </div>
        <div className="search-head">
          <div>
            <Input
              suffix={<SearchOutlined />}
              placeholder={searchPlaceholder}
              style={searchStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <Button type="primary" onClick={showModal} size="middle">
              Create Project
            </Button>
          </div>
          <Modal open={isCreate} onCancel={handleCancel} footer={null}>
            <CreateCard onCreate={handleCancel} />
          </Modal>
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          pagination={{ position: ["bottomLeft"] }}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default App;
