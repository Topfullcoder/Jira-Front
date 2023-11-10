import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import Icon from "@ant-design/icons";
import {
  HeaderMenuBar,
  LeftMenuBar,
  RightHeaderMenuBar,
  LeftContentBar,
  RightContentBar,
  CenterContentBar,
  RightCenterBar,
} from "./Background/Menu";
import Login from "./../../components/LoginForm/Login";
import "./login.css";

const LoginForm: React.FC = () => {
  const HeaderMenuBarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={HeaderMenuBar} {...props} />
  );
  const LeftMenuBarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LeftMenuBar} {...props} />
  );
  const RightHeaderMenuBarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={RightHeaderMenuBar} {...props} />
  );
  const LeftContentBarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LeftContentBar} {...props} />
  );
  const RightContentBarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={RightContentBar} {...props} />
  );
  const CenterContentBarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CenterContentBar} {...props} />
  );
  const RightCenterBarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={RightCenterBar} {...props} />
  );
  return (
    <div className="login-background">
      <HeaderMenuBarIcon className="header-menu" />
      <div className="header-menu-line" />
      <RightHeaderMenuBarIcon className="header-menu-actually" />
      <LeftMenuBarIcon className="slider-bar" />
      <LeftContentBarIcon className="breadcrumb-bar" />
      <RightContentBarIcon className="content-actually" />
      <CenterContentBarIcon className="center-content" />
      <RightCenterBarIcon className="content-right" />
      <Login />
    </div>
  );
};

export default LoginForm;
