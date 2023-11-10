import React, { useState, useEffect, useRef, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./../../redux/actions/userActions";
import { Input, Modal, Button } from "antd";
import type { InputRef } from "antd";
import Icon from "@ant-design/icons";
import { JiraLogo, Atlassian } from "./../../pages/Login/Background/Menu";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import "./registerform.css";
import { Link } from "react-router-dom";
import { UserData } from "../../redux/types";
import { Appstate } from "../../redux/store";

const App: React.FC = () => {
  const inputRef = useRef<InputRef>(null);
  const dispatch = useDispatch();
  const isRegister = useSelector((state: Appstate) => state.user.isRegistering);
  // const isRegister = useSelector((state) => state.user.isRegistering);
  const defaultUserData: UserData = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  };
  const [userinfo, setUserinfo] = useState(defaultUserData);

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

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserinfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(userinfo);
    console.log(isRegister);
    dispatch(registerUser(userinfo));
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
        <div className="app-login-view">
          <div>
            <LogoIcon className="app-logo" />
          </div>
          <h3 style={{ textAlign: "center" }}>Sign up to continue</h3>
          <form onSubmit={onSubmit}>
            <div>
              <Input
                ref={inputRef}
                placeholder="Enter your First Name"
                name="firstname"
                value={userinfo.firstname}
                onChange={handle}
                required
              />
            </div>
            <div className="app-between" />
            <div>
              <Input
                placeholder="Enter your Last Name"
                name="lastname"
                value={userinfo.lastname}
                onChange={handle}
                required
              />
            </div>
            <div className="app-between" />
            <div>
              <Input
                placeholder="Enter your ID"
                name="username"
                value={userinfo.username}
                onChange={handle}
                required
              />
            </div>
            <div className="app-between" />
            <div>
              <Input
                placeholder="Enter your Email"
                name="email"
                value={userinfo.email}
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
              <Button type="primary" htmlType="submit" block>
                Continue
              </Button>
            </div>
          </form>
          <div className="app-between" />
          <div className="app-footer-text">
            <Link to="/">Already have an Atlassian account? Log in</Link>
            <p className="app-square">•</p>
            <Link to="/register">Create an account with another email</Link>
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
