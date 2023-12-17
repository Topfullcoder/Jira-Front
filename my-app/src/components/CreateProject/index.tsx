import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Typography } from "antd";
import type { SelectProps } from "antd";
import { CreatePro, IdPair } from "./../../Types/CreateProject";
import { CreateProject } from "./../../redux/actions/apiActions";
import "./CreateProject.css";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const options: SelectProps["options"] = [];
const reporterOption: SelectProps["options"] = [];

const userListString = localStorage.getItem("userlist");
const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
const userListArr = userListString ? JSON.parse(userListString) : [];

userListArr.forEach((user: { id: number; username: string }) => {
  const option = {
    label: user.username,
    value: user.id,
  };
  options.push(option);

  if (currentUser.username === user.username) {
    const reporter = {
      label: user.username,
      value: user.id,
    };
    reporterOption.push(reporter);
  }
});

interface CreateCardProps {
  onCreate: () => void;
}

const CreateIssueForm: React.FC<CreateCardProps> = ({ onCreate }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const temp: IdPair[] = [];
    const temp1: IdPair[] = [];
    values.assignees.map((index: number) => {
      const item = { id: index };
      temp.push(item);
    });
    values.reporters.map((index: number) => {
      const item = { id: index };
      temp1.push(item);
    });
    const temp2: IdPair[] = [{ id: values.stages }];
    const temp3: number = +values.storyPoint;
    const updatedValues = {
      ...values,
      stages: temp2,
      assignees: temp,
      reporters: temp1,
      parent: null,
      sprint: null,
      storyPoint: temp3,
    };

    const response = await CreateProject(updatedValues);
    if (response) onCreate();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="create-issue-form-container">
      <Form
        form={form}
        name="createIssue"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="off"
        initialValues={{
          title: "",
          description: "",
          acceptanceCriteria: "",
          storyPoint: 0,
          stages: [],
          assignees: [],
          reporters: [],
          sprint: null,
          priority: "",
          type: "",
          parent: null,
        }}
      >
        <Title level={4}>Create issue</Title>
        <Form.Item
          label="Project Name*"
          name="title"
          rules={[
            { required: true, message: "Please input your project name!" },
          ]}
        >
          <Input placeholder="Project Name" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateIssueForm;
