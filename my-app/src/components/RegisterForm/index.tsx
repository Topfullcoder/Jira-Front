import React, { useState, useEffect, useRef } from "react";
import { Input, Modal, Button, Flex } from "antd";
import type { InputRef } from "antd";
import Icon, {
  GoogleSquareFilled,
  WindowsFilled,
  AppleFilled,
  SlackSquareFilled,
} from "@ant-design/icons";
import { JiraLogo, Atlassian } from "./../../pages/Login/Background/Menu";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import "./registerform.css";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const LogoIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={JiraLogo} {...props} />
  );

  const AtlassianIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={Atlassian} {...props} />
  );

  return (
    <div>
      <Modal
        className="app-login-modal"
        open={true}
        footer={null}
        styles={{
          body: {
            width: "300px",
            height: "600px",
          },
        }}
        closeIcon={null}
      >
        <div className="app-login-view">
          <div>
            <LogoIcon className="app-logo" />
          </div>
          <h3 style={{ textAlign: "center" }}>Sign up to continue</h3>
          <div>
            <Input ref={inputRef} placeholder="Enter your Email" />
          </div>
          <div className="app-between" />
          <div>
            <Flex vertical gap="small" style={{ width: "100%" }}>
              <Button type="primary" block>
                Sign Up
              </Button>
            </Flex>
          </div>
          <p style={{ textAlign: "center" }}>Or continue with:</p>
          <div className="app-between" />
          <Button icon={<GoogleSquareFilled />}>Google</Button>
          <div className="app-between" />
          <Button icon={<WindowsFilled />}>Microsoft</Button>
          <div className="app-between" />
          <Button icon={<AppleFilled />}>Apple</Button>
          <div className="app-between" />
          <Button icon={<SlackSquareFilled />}>Slack</Button>
          <div className="app-between" />
          <div className="app-footer-text">
            <Link to="/">Already have an Atlassian account? Log in</Link>
            <p className="app-square">•</p>
            <Link to="/register1">I have't Gmail</Link>
          </div>
          <div>
            <AtlassianIcon className="app-logo" />
          </div>
          <h5 style={{ alignItems: "center", textAlign: "center" }}>
            One account for Jira, Confluence, Trello and more. Privacy Policy •
            User Notice
          </h5>
        </div>
      </Modal>
    </div>
  );
};

export default App;
