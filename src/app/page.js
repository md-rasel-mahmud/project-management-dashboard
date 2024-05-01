"use client";
import Link from "next/link";
import { Button, Card, Col, Row, Skeleton } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useClientCrudProject } from "@/hooks/useClientCrudProject";

const Home = () => {
  const { data, isLoading } = useClientCrudProject();

  return (
    <Card title="PROJECTS">
      <Row gutter={[16, 16]}>
        {isLoading &&
          Array(6)
            .fill({})
            .map((_item, i) => (
              <Col span={8} key={i}>
                <Card>
                  <Skeleton loading={isLoading} avatar active />
                </Card>
              </Col>
            ))}

        {data?.data.map((project) => (
          <Col key={project.id} span={8}>
            <Card
              title={project.title}
              bordered={false}
              extra={
                <Link href={`/project/${project.id}`}>
                  <Button size="small" shape="round" icon={<EyeOutlined />}>
                    View
                  </Button>
                </Link>
              }
              actions={[
                <Button
                  key={`edit-${project.id}`}
                  type="text"
                  icon={<EditOutlined />}
                >
                  Edit
                </Button>,
                <Button
                  type="text"
                  key={`delete-${project.id}`}
                  danger
                  icon={<DeleteOutlined />}
                >
                  Delete
                </Button>,
              ]}
            >
              {project.description.length > 100
                ? project.description.substring(0, 100) + "..."
                : project.description}
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Home;
