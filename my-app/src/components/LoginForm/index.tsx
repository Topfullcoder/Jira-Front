import React, { useState, useEffect, useRef } from "react";
import { Input, Modal, Button, Flex } from "antd";
import type { InputRef } from "antd";
import Icon from "@ant-design/icons";
import { JiraLogo, Atlassian } from "./../../pages/Login/Background/Menu";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import "./loginform.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
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
        open={isModalOpen}
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
          <h3 style={{ textAlign: "center" }}>Log in to continue</h3>
          <div>
            <Input ref={inputRef} placeholder="Enter your Email" />
          </div>
          <div className="app-between" />
          <div>
            <Flex vertical gap="small" style={{ width: "100%" }}>
              <Button type="primary" block>
                Continue
              </Button>
            </Flex>
          </div>
          <p style={{ textAlign: "center" }}>Or continue with:</p>
          <div className="app-between" />
          <Button>Google</Button>
          <div className="app-between" />
          <Button>Microsoft</Button>
          <div className="app-between" />
          <Button>Apple</Button>
          <div className="app-between" />
          <Button>Slack</Button>
          <div className="app-between" />
          <div className="app-footer-text">
            <a href="/login">Can't log in</a>
            <p className="app-square">•</p>
            <a href="/register">Create an account</a>
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
