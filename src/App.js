import {
  Input,
  Button,
  Pagination,
  Steps,
  Checkbox,
  Rate,
  Form,
  Radio,
  Space,
  Image,
  Timeline,
  Layout,
  Popconfirm
} from "antd";
import {
  StepBackwardOutlined,
  UpCircleOutlined,
  StepForwardOutlined,
  DownloadOutlined,
  SmileOutlined,
  PoweroffOutlined,
  AudioOutlined,
  SearchOutlined
} from "@ant-design/icons";
import "./styles.css";
import "antd/dist/antd.css";
import { useState } from "react";
import Tooltip from "antd/es/tooltip";
import SiteLayout from "./SiteLayout";

const App = () => {
  const { Step } = Steps;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = () => {
    console.log("Failed");
  };
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [data, setData] = useState(3);
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <SiteLayout />
      <h2>Start editing to see some magic happen!</h2>
      <Input type="text" placeholder="Basic usage" />
      <Button type="dashed">Submit</Button>
      <StepBackwardOutlined />
      <StepForwardOutlined />
      <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
      <Button type="primary" icon={<PoweroffOutlined />} loading />
      <UpCircleOutlined />
      <AudioOutlined />
      <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      />
      );
      <Steps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            More...
            {value === 4 ? (
              <Input style={{ width: 100, marginLeft: 10 }} />
            ) : null}
          </Radio>
        </Space>
      </Radio.Group>
      <span>
        <Rate tooltips={desc} onChange={setData} value={data} />
        {data ? <span className="ant-rate-text">{desc[data - 1]}</span> : ""}
      </span>
      <Image.PreviewGroup>
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        />
      </Image.PreviewGroup>
      <Timeline>
        <Timeline.Item color="green">
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item color="green">
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
          <p>Custom color testing</p>
        </Timeline.Item>
      </Timeline>
      <Button type="primary">primary</Button>
      <Button type="primary" disabled>
        primary(disabled)
      </Button>
      <Tooltip title="Submit" placement="topRight">
        <Button danger type="text" shape="circle">
          text
        </Button>
      </Tooltip>
      <Tooltip title="search">
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<SearchOutlined />}
        />
      </Tooltip>
      <Tooltip title="download" placement="topRight" color="pink">
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large"
        >
          download
        </Button>
      </Tooltip>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </Layout>
      <Popconfirm
        title="Are you sure delete this task?"
        okText="Yes"
        cancelText="No"
      >
        <Button>Confirm</Button>
      </Popconfirm>
    </div>
  );
};
export default App;
