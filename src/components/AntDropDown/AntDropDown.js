import { Button, Dropdown, Menu, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import React from "react";

const AntDropDown = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          danger: true,
          label: "a danger item",
        },
      ]}
    />
  );
  return (
    <>
      <div>
        <Dropdown overlay={menu}>
          <div onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      </div>
      <div>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottom" arrow>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <Dropdown overlay={menu} placement="topLeft" arrow>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="top" arrow>
          <Button>top</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topRight" arrow>
          <Button>topRight</Button>
        </Dropdown>
      </div>
      <div>
        <Dropdown overlay={menu} trigger={["click"]}>
          <div onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      </div>
    </>
  );
};

export default AntDropDown;
