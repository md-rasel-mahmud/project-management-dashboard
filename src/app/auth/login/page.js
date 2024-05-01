"use client";
import { useRouter } from "next/navigation";
import { Button, Flex, Form, Input, Space } from "antd";
import { useToastStore } from "@/store/useToastStore";

const Login = () => {
  // HOOKS
  const [form] = Form.useForm();
  const { addToast } = useToastStore();
  const router = useRouter();

  // HANDLE FORM SUBMISSION
  const onFormSubmit = async (values) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    // HANDLE ERROR
    if (!response.ok) {
      const data = await response.json();
      addToast(data.message, "error");

      console.error({ data });
      return;
    }

    const data = await response.json();
    addToast(data.message, "success");
    router.push("/");
  };

  // HANDLE FORM SUBMISSION FAILURE
  const onFormSubmitFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);

    addToast("Failed to submit the form!", "error");
  };

  return (
    <Flex justify="center" align="center" vertical style={{ height: "100vh" }}>
      <h1 className="text-3xl text-center font-bold mb-5">Login</h1>
      <Form
        className="bg-gray-300/10 p-5 rounded-lg"
        name="basic"
        layout="vertical"
        labelCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFormSubmit}
        onFinishFailed={onFormSubmitFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          className="mb-2"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: "Invalid email address!",
            },
          ]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your Password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 8,
          }}
        >
          <Space>
            <Button onClick={form.resetFields()} htmlType="reset">
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Flex>
  );
};
export default Login;
