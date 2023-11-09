import React, { useState } from "react";
import { Input, Button, Modal } from "antd";
import "./registerform.css";

const App: React.FC = () => {
  return (
    <>
      <Modal
        className="app-register"
        title="Log in to continue"
        open={true}
        closeIcon={false}
        footer={null}
      >
        <Input />
        <button>Continue</button>
        <p>Or continue with:</p>
        <button>Google</button>
        <button>Microsoft</button>
        <button>Apple</button>
        <button>Slack</button>
        <span>
          <a>Already have an Atlassian account? Log in</a>
        </span>
        <br />
        <p>
          One account for Jira, Confluence, Trello and <a>more</a>. This page is
          protected by reCAPTCHA and the Google <a>Privacy Policy</a> and{" "}
          <a>Terms of Service</a> apply.
        </p>
      </Modal>
    </>
  );
};

export default App;
