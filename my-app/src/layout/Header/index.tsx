import React, { useState } from "react";
import Icon, {
  BellFilled,
  SearchOutlined,
  QuestionCircleFilled,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { Menu, Button, MenuProps, Input, Avatar, Modal } from "antd";
import { userList } from "./../../redux/actions/apiActions";
import CreateCard from "../../components/CreateProjectSample";
import LOGO_IMG from "./../../assets/image/icon/Jira Software.svg";
import "./header.css";

const items: MenuProps["items"] = [
  {
    label: "Your Work",
    key: "mail",
    children: [
      {
        label: "Assigned to me",
        key: "assigned",
      },
      {
        label: "Recent",
        key: "mail_recent",
      },
      {
        label: "Boards",
        key: "mail_boards",
      },
    ],
  },
  {
    label: "Projects",
    key: "projects",
    children: [
      {
        label: "RECENT",
        key: "project_recent",
      },
      {
        label: "INCLUDED FREE WITH YOUR PLAN",
        key: "your_plan",
      },
      {
        label: "Boards",
        key: "project_boards",
      },
    ],
  },
  {
    label: "Filters",
    key: "filters",
    children: [
      {
        label: "View all filters",
        key: "all_filters",
      },
      {
        label: "View all issues",
        key: "all_issues",
      },
    ],
  },
  {
    label: "Dashboards",
    key: "dashboards",
    children: [
      {
        label: "View all dashboards",
        key: "all_dashboard",
      },
      {
        label: "Create dashboard",
        key: "create_dashboard",
      },
    ],
  },
  {
    label: "Teams",
    key: "teams",
    children: [
      {
        label: "Search people and teams",
        key: "peopel_search",
      },
    ],
  },
  {
    label: "Plans",
    key: "Plans",
  },
  {
    label: "Apps",
    key: "apps",
    children: [
      {
        label: "Explore more apps",
        key: "explore_app",
      },
      {
        label: "Manage your apps",
        key: "manage_apps",
      },
      {
        label: "View app requests",
        key: "view_app",
      },
    ],
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("Homepage");
  const [inputStyle, setInputStyle] = useState({ width: "150px" });
  const [isCreate, setIsCreate] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleFocus = () => {
    setInputStyle({ width: "600px" });
  };

  const handelBlur = () => {
    setInputStyle({ width: "150px" });
  };

  const AppStroe = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"
      ></path>
    </svg>
  );

  const AppStoreIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={AppStroe} {...props} />
  );

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const showModal = async () => {
    const response: any[] = await userList();
    const userSet = response.map((user, idx) => ({
      id: user.id,
      username: user.username,
    }));
    localStorage.setItem("userlist", JSON.stringify(userSet));
    setIsCreate(true);
  };

  const handleCancel = () => {
    setIsCreate(false);
  };

  return (
    <div className="app-menu-bar">
      <div className="app-menu-bar-left">
        <div className="logo">
          <div>
            <AppStoreIcon style={{ fontSize: "32px" }} />
          </div>
          <div>
            <a>
              <img src={LOGO_IMG} alt="NO LOGO" />
            </a>
          </div>
        </div>
        <div className="app-menu-item">
          <div>
            <Menu
              className="header-menu"
              mode="horizontal"
              onClick={onClick}
              selectedKeys={[current]}
              items={items}
            />
          </div>
          <div>
            <Button type="primary" onClick={showModal} size="middle">
              Create
            </Button>
            <Modal open={isCreate} onCancel={handleCancel} footer={null}>
              <CreateCard onCreate={handleCancel} />
            </Modal>
          </div>
        </div>
      </div>
      <div className="app-actually-items">
        <div className="app-search-item">
          <Input
            prefix={<SearchOutlined />}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handelBlur}
            placeholder="Search"
          />
        </div>
        <div>
          <BellFilled rotate={45} style={{ fontSize: "22px" }} />
        </div>
        <div>
          <QuestionCircleFilled style={{ fontSize: "22px" }} />
        </div>
        <div>
          <SettingFilled style={{ fontSize: "22px" }} />
        </div>
        <div>
          <Avatar icon={<UserOutlined style={{ fontSize: "15px" }} />} />
        </div>
      </div>
    </div>
  );
};

export default App;
