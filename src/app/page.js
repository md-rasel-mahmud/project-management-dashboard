import Link from "next/link";
import { Button, Card, Col, Row, Space } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const page = () => {
  return (
    <Card title="PROJECTS">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            title="Web Development"
            bordered={false}
            extra={
              <Link href="/projects/view">
                <Button size="small" shape="round" icon={<EyeOutlined />}>
                  View
                </Button>
              </Link>
            }
          >
            <Space>
              <Button type="primary" icon={<EditOutlined />}>
                Edit
              </Button>
              <Button danger icon={<DeleteOutlined />}>
                Delete
              </Button>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Web Development"
            bordered={false}
            extra={
              <Link href="/projects/view">
                <Button size="small" shape="round" icon={<EyeOutlined />}>
                  View
                </Button>
              </Link>
            }
          >
            <Space>
              <Button type="primary" icon={<EditOutlined />}>
                Edit
              </Button>
              <Button danger icon={<DeleteOutlined />}>
                Delete
              </Button>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Web Development"
            bordered={false}
            extra={
              <Link href="/projects/view">
                <Button size="small" shape="round" icon={<EyeOutlined />}>
                  View
                </Button>
              </Link>
            }
          >
            <Space>
              <Button type="primary" icon={<EditOutlined />}>
                Edit
              </Button>
              <Button danger icon={<DeleteOutlined />}>
                Delete
              </Button>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Web Development"
            bordered={false}
            extra={
              <Link href="/projects/view">
                <Button size="small" shape="round" icon={<EyeOutlined />}>
                  View
                </Button>
              </Link>
            }
          >
            <Space>
              <Button type="primary" icon={<EditOutlined />}>
                Edit
              </Button>
              <Button danger icon={<DeleteOutlined />}>
                Delete
              </Button>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Web Development"
            bordered={false}
            extra={
              <Link href="/projects/view">
                <Button size="small" shape="round" icon={<EyeOutlined />}>
                  View
                </Button>
              </Link>
            }
          >
            <Space>
              <Button type="primary" icon={<EditOutlined />}>
                Edit
              </Button>
              <Button danger icon={<DeleteOutlined />}>
                Delete
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default page;
