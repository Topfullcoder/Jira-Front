import React from "react";
import { Form, Input, Button, Select, Checkbox, Typography } from "antd";
import "./CreateProject.css";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const CreateIssueForm: React.FC = () => {
  const [form] = Form.useForm();

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
          rules={[{ required: true, message: "Please select your project!" }]}
        >
          <Input placeholder="Project title" />
        </Form.Item>

        <Form.Item
          label="Issue type*"
          name="issueType"
          rules={[{ required: true, message: "Please select the issue type!" }]}
        >
          <Select placeholder="Select issue type">
            <Option value="epic">Epic</Option>
            <Option value="story">Story</Option>
            <Option value="task">Task</Option>
            <Option value="subtask">Subtask</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="AcceptanceCriteria*"
          name="acceptanceCriteria"
          rules={[{ required: true, message: "Please input the summary!" }]}
        >
          <Input placeholder="Issue summary" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={4} placeholder="Issue description" />
        </Form.Item>

        {/* Assignee Field */}
        <Form.Item label="Assignee" name="assignee">
          <Input placeholder="Assignee name" />
        </Form.Item>

        {/* Labels Field */}
        <Form.Item label="Labels" name="labels">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Select or create labels"
          />
        </Form.Item>

        {/* Reporter Field */}
        <Form.Item
          label="Reporter*"
          name="reporter"
          rules={[{ required: true, message: "Please input the reporter!" }]}
        >
          <Input placeholder="Reporter name" />
        </Form.Item>

        {/* Linked Issues Field */}
        <Form.Item label="Linked Issues" name="linkedIssues">
          <Select placeholder="Select issue to link">
            <Option value="epic">Epic</Option>
            <Option value="story">Story</Option>
            <Option value="task">Task</Option>
            <Option value="subtask">Subtask</Option>
          </Select>
        </Form.Item>

        {/* Linked Issues Field */}
        <Form.Item label="Linked Issues" name="linkedIssues">
          <Select placeholder="Select issue to link">
            <Option value="epic">Epic</Option>
            <Option value="story">Story</Option>
            <Option value="task">Task</Option>
            <Option value="subtask">Subtask</Option>
          </Select>
        </Form.Item>

        {/* Create another issue Checkbox */}
        <Form.Item
          name="createAnother"
          valuePropName="checked"
          initialValue={false}
        >
          <Checkbox>Create another issue</Checkbox>
        </Form.Item>

        {/* Form Buttons */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button htmlType="button" style={{ margin: "0 8px" }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateIssueForm;
