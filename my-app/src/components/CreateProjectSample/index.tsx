import React, { useState } from "react";
import { Form, Input, Button, Select, Checkbox, Typography } from "antd";
import CreatePro from "./../../Types/CreateProject";
import "./CreateProject.css";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const CreateIssueForm: React.FC = () => {
  const [form] = Form.useForm();
  const projectinfo: CreatePro = {
    title: "",
    description: "",
    acceptanceCriteria: "",
    storyPoint: 0,
    stages: [{ id: 1 }],
    assignees: [{ id: 1 }],
    reporters: [{ id: 1 }],
    sprint: null,
    priority: "",
    type: "",
    parent: null,
  };
  const [creatProject, setCreateProject] = useState(projectinfo);

  const onFinish = (values: any) => {
    console.log("Success:", values);
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
      >
        <Title level={4}>Create issue</Title>
        <Form.Item
          label="Project*"
          name="title"
          rules={[
            { required: true, message: "Please input your project name!" },
          ]}
        >
          <Input
            placeholder="Project title"
            name="title"
            value={projectinfo.title}
          />
        </Form.Item>

        <Form.Item
          label="Issue type*"
          name="type"
          rules={[{ required: true, message: "Please select the issue type!" }]}
        >
          <Select placeholder="Select issue type" value={creatProject.type}>
            <Option value="Epic">Epic</Option>
            <Option value="Story">Story</Option>
            <Option value="Task">Task</Option>
            <Option value="Subtask">Subtask</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Stages type*"
          name="stage"
          rules={[
            { required: true, message: "Please select the stages type!" },
          ]}
        >
          <Select placeholder="Select stage type" value={creatProject.stages}>
            <Option value="Todo">To Do</Option>
            <Option value="InProgress">In Progress</Option>
            <Option value="Test">Test</Option>
            <Option value="Done">Done</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="AcceptanceCriteria*"
          rules={[{ required: true, message: "Please input the summary!" }]}
        >
          <Input
            placeholder="Issue summary"
            name="acceptanceCriteria"
            value={projectinfo.acceptanceCriteria}
            showCount
            maxLength={30}
          />
        </Form.Item>

        <Form.Item label="Description">
          <TextArea
            showCount
            maxLength={1000}
            rows={4}
            placeholder="Issue description"
            name="description"
            value={projectinfo.description}
          />
        </Form.Item>

        <Form.Item label="StoryPoint">
          <Input
            type="number"
            placeholder="Story Point number"
            name="storyPoint"
            value={projectinfo.storyPoint}
            max={5}
          />
        </Form.Item>

        <Form.Item label="Assignee" name="assignees">
          <Select placeholder="Select assignees" value={projectinfo.assignees}>
            <Option value={1}>Epic</Option>
            <Option value={2}>Story</Option>
            <Option value={3}>Task</Option>
            <Option value={4}>Subtask</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Reporters" name="reporters">
          <Select placeholder="Select reporters" value={projectinfo.reporters}>
            <Option value={1}>Epic</Option>
            <Option value={2}>Story</Option>
            <Option value={3}>Task</Option>
            <Option value={4}>Subtask</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Priority" name="priority">
          <Select placeholder="Select priority" value={projectinfo.priority}>
            <Option value="low">Low</Option>
            <Option value="medium">Medium</Option>
            <Option value="High">High</Option>
          </Select>
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
