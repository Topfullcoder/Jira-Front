import React, { useEffect, useState } from "react";
import Icon, { UserOutlined, HomeOutlined } from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, Timeline, theme } from "antd";
import "./home.css";
import ProBoard from "./../../components/Board";
import { Link } from "react-router-dom";

const { Content, Sider } = Layout;

const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <path
      d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

const ArrowUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <path
      d="M10.294 9.698a.988.988 0 010-1.407 1.01 1.01 0 011.419 0l2.965 2.94a1.09 1.09 0 010 1.548l-2.955 2.93a1.01 1.01 0 01-1.42 0 .988.988 0 010-1.407l2.318-2.297-2.327-2.307z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

const TimeLine = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <path
      d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

const BackLog = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <g fill="currentColor">
      <path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17v2.002zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0117.006 21H4.994A1.998 1.998 0 013 19.002v-2.004z"></path>
      <path d="M5 15h12v-2H5v2zm-2-4h16v6H3v-6z"></path>
      <path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9v2.002zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0119.006 13H6.994A1.998 1.998 0 015 11.002V8.998z"></path>
      <path d="M5 5v2h12V5H5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3V4.998z"></path>
    </g>
  </svg>
);

const Board = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <g fill="currentColor">
      <path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z"></path>
      <path d="M8 6v12h2V6zm6 0v12h2V6z"></path>
    </g>
  </svg>
);

const Code = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <path
      d="M14.155 4.055a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.891.65l4.83-14.045a1 1 0 00-.62-1.271m-6.138 8.21l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436m12.219 1.568l-3.32-3.22a.999.999 0 10-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

const ProjectPage = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <g fill="currentColor" fillRule="evenodd">
      <rect x="8" y="6" width="8" height="2" rx="1"></rect>
      <rect x="8" y="9" width="8" height="2" rx="1"></rect>
      <rect x="8" y="12" width="4" height="2" rx="1"></rect>
      <path
        d="M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 015 20.01V3.99z"
        fillRule="nonzero"
      ></path>
    </g>
  </svg>
);

const Add = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <g fill="currentColor" fillRule="evenodd">
      <path
        d="M16.002 3H4.995A1.995 1.995 0 003 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0021 19.005V7.998 11h-2v8H5V5h8V3h3.002z"
        fillRule="nonzero"
      ></path>
      <path d="M19 5V3.99A1 1 0 0018 3c-.556 0-1 .444-1 .99V5h-1a1 1 0 000 2h1v1.01A1 1 0 0018 9c.556 0 1-.444 1-.99V7h1a1 1 0 000-2h-1z"></path>
    </g>
  </svg>
);

const ProjectSetting = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <path
      d="M11.701 16.7a5.002 5.002 0 110-10.003 5.002 5.002 0 010 10.004m8.368-3.117a1.995 1.995 0 01-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 00.315-.574 8.947 8.947 0 00-.836-1.993.477.477 0 00-.598-.195 2.04 2.04 0 01-1.29.08 1.988 1.988 0 01-1.404-1.395 2.04 2.04 0 01.076-1.297.478.478 0 00-.196-.597 8.98 8.98 0 00-1.975-.826.479.479 0 00-.574.314 1.995 1.995 0 01-1.885 1.346 1.994 1.994 0 01-1.884-1.345.482.482 0 00-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 00-.198.582A2.002 2.002 0 014.445 7.06a.478.478 0 00-.595.196 8.946 8.946 0 00-.833 1.994.48.48 0 00.308.572 1.995 1.995 0 011.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 00-.308.57 8.99 8.99 0 00.723 1.79.477.477 0 00.624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 00.168.628 8.946 8.946 0 002.11.897.474.474 0 00.57-.313 1.995 1.995 0 011.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 00.57.313 8.964 8.964 0 002.084-.883.473.473 0 00.167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 00.628-.19 8.925 8.925 0 00.728-1.793.478.478 0 00-.314-.573"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

const ArrowDownIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowDown} {...props} />
);
const ArrowUpIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowUp} {...props} />
);
const TimeLineIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TimeLine} {...props} />
);
const BacklogIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={BackLog} {...props} />
);
const BoardIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Board} {...props} />
);
const CodeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Code} {...props} />
);
const ProjectPageIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ProjectPage} {...props} />
);
const AddIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Add} {...props} />
);
const ProjectSettingIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ProjectSetting} {...props} />
);

const PlanningChilde = [
  {
    key: 1,
    label: "Timeline",
    Icon: TimeLineIcon,
  },
  {
    key: 2,
    label: "Backlog",
    Icon: BacklogIcon,
  },
  {
    key: 3,
    label: "Board",
    Icon: BoardIcon,
  },
];

const DevelopermentChilde = [
  {
    key: 1,
    label: "Code",
    Icon: CodeIcon,
  },
];

const ChildArray = [[], PlanningChilde, DevelopermentChilde];

const item1: MenuProps["items"] = [
  {
    icon: UserOutlined,
    label: "UserName",
  },
  {
    icon: ArrowUpIcon,
    label: "PLANNING",
  },
  {
    icon: ArrowUpIcon,
    label: "DEVELOPMENT",
  },
].map((value, idx) => {
  const key = idx;
  return {
    key: `sub_${key}_${key}`,
    icon: React.createElement(value.icon),
    label: `${value.label}`,
    children: ChildArray[key].map((_, idx) => {
      const subkey = idx * 3 + key + 1;
      return {
        key: subkey,
        label: _.label,
        Icon: React.createElement(_.Icon),
      };
    }),
  };
});

const item2: MenuProps["items"] = [
  {
    icon: ProjectPageIcon,
    label: "Project Page",
  },
  {
    icon: AddIcon,
    label: "Project Page",
  },
  {
    icon: ProjectSettingIcon,
    label: "Project Page",
  },
].map((value, idx) => {
  return {
    key: `sub_2_${idx}`,
    label: value.label,
    icon: React.createElement(value.icon),
  };
});

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [userData, setUserData] = useState({ username: "" });
  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const breadcrumbItems = [
    {
      title: <Link to={"/"}>Home</Link>,
    },
    {
      title: "Project",
    },
    userData && {
      title: userData.username,
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="slider-menu-bar"
        width={200}
        collapsible
        collapsed={collapsed}
        style={{ background: colorBgContainer }}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ borderRight: 0 }}
          items={item1}
        />
        <br />
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ borderRight: 0 }}
          items={item2}
        />
      </Sider>
      <Layout style={{ padding: "0 14px 0px", height: "91vh" }}>
        <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />
        <Content
          className="app-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <ProBoard />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
