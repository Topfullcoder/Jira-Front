import React, { useState, useEffect, useRef, FormEvent } from "react";
import { Input, Modal, Button, Flex, Alert } from "antd";
import type { InputRef } from "antd";
import Icon from "@ant-design/icons";
import { JiraLogo, Atlassian } from "./../../pages/Login/Background/Menu";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import "./loginform.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import { LoginCredentials, login } from "./../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const App: React.FC = () => {
  const inputRef = useRef<InputRef>(null);
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<AppState, any, AnyAction> = useDispatch();
  const error = useSelector((state: AppState) => state.auth.error);
  const defaultUserData: LoginCredentials = {
    username: "",
    password: "",
  };
  const [userinfo, setUserinfo] = useState(defaultUserData);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (error !== null) setIsError(true);
    else setIsError(false);
  }, [error]);

  const LogoIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={JiraLogo} {...props} />
  );

  const AtlassianIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={Atlassian} {...props} />
  );

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserinfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const success = await dispatch(login(userinfo));
    if (success) {
      navigate("/main");
    } else {
      redirect("/login");
    }
  };

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
        {isError === true && (
          <Alert
            message="Input Error"
            showIcon
            description={error}
            type="error"
            closable
          />
        )}
        <div className="app-login-view">
          <div>
            <LogoIcon className="app-logo" />
          </div>
          <h3 style={{ textAlign: "center" }}>Log in to continue</h3>
          <form onSubmit={onSubmit}>
            <div>
              <Input
                ref={inputRef}
                placeholder="Enter your User Id"
                name="username"
                value={userinfo.username}
                onChange={handle}
                required
              />
            </div>
            <div className="app-between" />
            <div>
              <Input.Password
                placeholder="Enter your password"
                name="password"
                value={userinfo.password}
                onChange={handle}
                required
              />
            </div>
            <div className="app-between" />

            <div>
              <Flex vertical gap="small" style={{ width: "100%" }}>
                <Button type="primary" htmlType="submit" block>
                  Sign in
                </Button>
              </Flex>
            </div>
          </form>
          <p style={{ textAlign: "center" }}>Or continue with:</p>
          <div className="app-between" />
          <div className="app-footer-text">
            <Link to="/">I already have another mail.</Link>
            <p className="app-square">•</p>
            <Link to="/register">Create an account</Link>
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
